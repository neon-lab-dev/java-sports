/**
 * Calculates the price after applying a discount percentage to the base price.
 *
 * @param {number} basePrice - The original price before applying the discount.
 * @param {number} [discountPercent=0] - The percentage of discount to be applied. Defaults to 0 if not provided.
 * @returns {number} - The price after applying the discount, rounded to 2 decimal places.
 */
export const getPriceAfterDiscount = (basePrice, discountPercent = 0) => {
  return Number(
    (
      Number(basePrice) -
      (Number(discountPercent) / 100) * Number(basePrice)
    ).toFixed(2)
  );
};
