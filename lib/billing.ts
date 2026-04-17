export const BATIFLOW_PRO_PRICE_LABEL = "14,90€/mois";
export const BATIFLOW_PRO_PRICE_CENTS = 1490;

const FALLBACK_BATIFLOW_PRO_PAYMENT_LINK = "https://buy.stripe.com/9B6eVe4Li2az0Yi1OjeOH1G";

export function getBatiFlowProPaymentLink() {
  return (
    process.env.BATIFLOW_PRO_PAYMENT_LINK?.trim() ||
    process.env.NEXT_PUBLIC_BATIFLOW_PRO_PAYMENT_LINK?.trim() ||
    FALLBACK_BATIFLOW_PRO_PAYMENT_LINK
  );
}
