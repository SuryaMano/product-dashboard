const priceFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

/** Format number as GBP, e.g. 33.5 -> "£33.50" */
export function formatPrice(value: number): string {
  return priceFormatter.format(value);
}