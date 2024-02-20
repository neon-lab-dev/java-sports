export const calculatePercentage = (basePrice, discountedPrice) => {
  return Math.floor(((basePrice - discountedPrice) / basePrice) * 100);
};
