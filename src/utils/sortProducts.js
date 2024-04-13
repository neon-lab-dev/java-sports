const sortProducts = (products, sortBy) => {
  if (!products || !products.length || !sortBy) return products;
  if (sortBy === "Low to High price") {
    return products.sort((a, b) => a.baseprice - b.baseprice);
  }
  if (sortBy === "High to low price") {
    return products.sort((a, b) => b.baseprice - a.baseprice);
  }
  return products;
};

export default sortProducts;
