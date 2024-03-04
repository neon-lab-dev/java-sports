import { searchAProduct } from "@/api/products";
import AppCard from "@/components/reusable/AppCard";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["search", searchParams.get("q")],
    queryFn: () => searchAProduct(searchParams.get("q")),
  });

  return (
    <div className="bg-white py-12">
      <section className="wrapper">
        {!searchParams.get("q") ? (
          <div className="h-28 flex items-center justify-center text-lg">
            Please enter a product name to search
          </div>
        ) : (
          <>
            {isError && (
              <div className="h-28 flex items-center justify-center text-lg">
                Error: {error.message}
              </div>
            )}
            {isLoading ? (
              <div className="flex flex-col gap-5 sm:gap-12 items-center justify-center">
                <h1 className="text-2xl font-bold text-center">
                  Searching for &quot;{searchParams.get("q")}&quot;
                </h1>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                </div>
              </div>
            ) : (
              <div>
                <div className="flex flex-col gap-5 sm:gap-12 items-center justify-center">
                  <h1 className="text-2xl font-bold text-center">
                    {data.products.length || 0} results found for &quot;
                    {searchParams.get("q")}
                    &quot;
                  </h1>
                  <div className="flex flex-wrap gap-4 justify-center items-center">
                    {data.products.map((product) => (
                      <AppCard key={product._id} product={product} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};
export default SearchPage;
