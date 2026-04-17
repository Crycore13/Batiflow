import { NextResponse } from "next/server";
import {
  setSubscriptionStatusByEmail,
  upsertSubscriptionStatusByEmail,
} from "@/lib/batiflow-data";

type WebhookPayload = {
  customer_email?: unknown;
  event_type?: unknown;
  payment?: {
    customer_email?: unknown;
  };
  type?: unknown;
  data?: {
    object?: {
      customer_details?: {
        email?: unknown;
      };
      customer_email?: unknown;
      email?: unknown;
    };
  };
};

function readString(value: unknown) {
  if (typeof value !== "string") {
    return null;
  }

  const normalized = value.trim();
  return normalized ? normalized : null;
}

function getEventType(payload: WebhookPayload) {
  return readString(payload.event_type) ?? readString(payload.type);
}

function getCustomerEmail(payload: WebhookPayload) {
  return (
    readString(payload.payment?.customer_email) ??
    readString(payload.customer_email) ??
    readString(payload.data?.object?.customer_details?.email) ??
    readString(payload.data?.object?.customer_email) ??
    readString(payload.data?.object?.email)
  );
}

export async function handleSubscriptionWebhook(request: Request) {
  let payload: WebhookPayload;

  try {
    payload = (await request.json()) as WebhookPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const eventType = getEventType(payload);

  if (!eventType) {
    return NextResponse.json({ ok: false, error: "missing_event_type" }, { status: 400 });
  }

  if (eventType !== "checkout.session.completed" && eventType !== "customer.subscription.deleted") {
    return NextResponse.json({ ok: true, ignored: true, eventType });
  }

  const customerEmail = getCustomerEmail(payload);

  if (!customerEmail) {
    return NextResponse.json({ ok: false, error: "missing_customer_email" }, { status: 400 });
  }

  if (eventType === "checkout.session.completed") {
    const user = await upsertSubscriptionStatusByEmail(customerEmail, "pro");
    return NextResponse.json({ ok: true, eventType, email: user.email, status: "pro" });
  }

  const user = await setSubscriptionStatusByEmail(customerEmail, "free");

  return NextResponse.json({
    ok: true,
    eventType,
    email: customerEmail,
    ignored: !user,
    status: user?.subscriptionStatus ?? "free",
  });
}
