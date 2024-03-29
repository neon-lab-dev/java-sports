import ACCORDION_LINKS from "@/assets/constants/accordionLinks";

export const getCategoryFilters = (category, type) => {
  const categoryObj = ACCORDION_LINKS.find((item) => item.label === category);
  if (!categoryObj) return null;
  if (categoryObj.filters) return categoryObj.filters;
  const typeObj = categoryObj.dropdowns.find((item) => item.label === type);
  if (!typeObj) return null;
  if (typeObj.filters) return typeObj.filters;
  return null;
};
