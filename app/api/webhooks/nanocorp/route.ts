import { handleSubscriptionWebhook } from "@/lib/subscription-webhook";

export const runtime = "nodejs";

export async function POST(request: Request) {
  return handleSubscriptionWebhook(request);
}
