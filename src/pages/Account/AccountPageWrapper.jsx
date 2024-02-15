import TABS from "@/assets/constants/accountPageTabs";
import USER from "@/assets/mockData/user";
import { paramToWord } from "@/utils/paramUtils";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const AccountPageWrapper = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!TABS.includes(searchParams.get("tab"))) {
      setSearchParams({ tab: "account-dashboard" });
    }
  }, [searchParams, setSearchParams]);

  return (
    <div className="bg-white w-full ">
      <section className="lg:wrapper xl:w-[90%] 2xl:w-[80%] flex items-center justify-center flex-col pt-4 gap-3 sm:gap-6 ">
        <h1 className="font-600 text-2xl sm:text-3xl lg:text-4xl">
          Welcome, {USER.name}
        </h1>
        <div className="flex justify-between w-full gap-8 border-t border-grey-light pb-12 pt-6 sm:pt-12">
          <div className="flex-col gap-4 hidden lg:flex border-grey-light border-x-2 w-64 min-w-64 h-max">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setSearchParams({ tab })}
                className={`px-4 py-4 border-y-2 border-grey-light font-500 font-Lato ${tab === searchParams.get("tab") ? "bg-primary text-white" : ""}`}
              >
                {paramToWord(tab)}{" "}
                {tab === "recent-orders" && <>({USER.recentOrders.length})</>}
              </button>
            ))}
          </div>
          <div className="flex-grow">{children}</div>
        </div>
      </section>
    </div>
  );
};
export default AccountPageWrapper;
