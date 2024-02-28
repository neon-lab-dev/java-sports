import { getAllMyOrders } from "@/api/orders";
import TABS from "@/assets/constants/accountPageTabs";
import AppProductsYouMightLike from "@/components/reusable/AppProductsYouMightLike";
import { paramToWord } from "@/utils/paramUtils";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const AccountPageWrapper = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useSelector((state) => state.user);
  
  const { data: myOrders } = useQuery({
    queryKey: ["myOrders"],
    queryFn: getAllMyOrders,
  });

  useEffect(() => {
    console.log("myOrders", myOrders);
  }, [myOrders]);

  useEffect(() => {
    if (!TABS.includes(searchParams.get("tab"))) {
      setSearchParams({ tab: "account-dashboard" });
    }
  }, [searchParams, setSearchParams]);

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="bg-white w-full flex flex-col gap-12">
        <section className="lg:wrapper xl:w-[90%] 2xl:w-[80%] flex items-center justify-center flex-col pt-4 gap-3 sm:gap-6 ">
          <h1 className="font-600 text-2xl sm:text-3xl lg:text-4xl">
            Welcome, {user.full_name}
          </h1>
          <div className="flex justify-between w-full gap-8 border-t border-opacity-50 border-grey-light pb-12 pt-6 sm:pt-12">
            <div className="flex-col gap-4 hidden lg:flex border-grey-light border-x border-opacity-50 w-64 min-w-64 h-max">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSearchParams({ tab })}
                  className={`px-4 py-4 border-y border-grey-light border-opacity-50 font-500 font-Lato ${tab === searchParams.get("tab") ? "bg-primary text-white" : ""}`}
                >
                  {paramToWord(tab)}{" "}
                </button>
              ))}
            </div>
            <div className="flex-grow">{children}</div>
          </div>
        </section>
      </div>
      <AppProductsYouMightLike />
    </div>
  );
};
export default AccountPageWrapper;
