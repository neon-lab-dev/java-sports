import { useSearchParams } from "react-router-dom";
import { TABS } from "..";
import KeyFeatures from "./KeyFeatures";

const TabPage = ({ product }) => {
  const [searchParams] = useSearchParams();
  const Tab =
    TABS.find((tab) => tab.key === searchParams.get("activeTab"))?.Component ||
    KeyFeatures;

  return (
    <section className="bg-white py-12">
      <div className="wrapper">
        <Tab product={product} />
      </div>
    </section>
  );
};
export default TabPage;
