import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/batiflow-data";
import {
  BATIFLOW_PRO_PRICE_CENTS,
  BATIFLOW_PRO_PRICE_LABEL,
  getBatiFlowProPaymentLink,
} from "@/lib/billing";

export const runtime = "nodejs";

export async function GET() {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  return NextResponse.json({
    ok: true,
    paymentLinkUrl: getBatiFlowProPaymentLink(),
    priceCents: BATIFLOW_PRO_PRICE_CENTS,
    priceLabel: BATIFLOW_PRO_PRICE_LABEL,
    subscriptionStatus: user.subscriptionStatus,
  });
}
