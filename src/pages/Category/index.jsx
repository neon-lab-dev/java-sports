import { useParams } from "react-router-dom";
import CategoryLayout from "./CategoryLayout";
import ACCORDION_LINKS from "@/assets/constants/accordionLinks";
import NotFound from "../NotFound";
import { wordToParam } from "@/utils/paramUtils";

const CategoryPage = () => {
  const { category } = useParams();
  const isCategoryAvailable = ACCORDION_LINKS.some(
    ({ label }) => wordToParam(label) === category
  );
  if (!isCategoryAvailable) return <NotFound />;
  return <CategoryLayout />;
};
export default CategoryPage;
