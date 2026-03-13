export function calculateDiscount(price: number, discount?: number): number {
  if (!discount || discount <= 0) return price;
  if (discount > 100) discount = 100;

  const discountAmount = (price * discount) / 100;
  return Math.round(price - discountAmount);
}
