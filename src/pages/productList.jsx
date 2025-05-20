import { useState } from "react";
import { Layout } from "../components/shared";
import { useParams } from "react-router";
import { menuItemGroup, SampleProducts } from "../utils/data";
import { SingleProduct } from "../components/productList";

const ProductList = () => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  const toggleDesc = () => {
    setShowFullDesc((prev) => !prev);
  };
  const { menuItem, category, subCategory } = useParams();

  let menuGroup = menuItemGroup?.find((menuItem) => {
    return menuItem.categories.find((cat) => {
      return cat.name?.toLowerCase() === category?.toLowerCase();
    });
  });

  let prodCat = menuGroup?.categories?.find((cat) => {
    return cat.name?.toLowerCase() === category?.toLowerCase();
  });

  let prodSubCat = prodCat?.subCategories?.find((subCat) => {
    return (
      subCat?.name?.toLowerCase()?.replace(" ", "-") ===
      subCategory?.toLowerCase()
    );
  });

  const recommendedList = (() => {
    let subCatList = prodCat?.subCategories?.filter((x) => {
      return (
        x?.name?.toLowerCase()?.replace(" ", "-") !== subCategory?.toLowerCase()
      );
    });
    let othersList = prodCat?.others?.filter((x) => {
      return x?.name?.toLowerCase() !== category?.toLowerCase;
    });

    return [...subCatList, ...othersList];
  })();

  return (
    <>
      <Layout>
        {prodCat ? (
          <div>
            <p className="text-center text-[30px] mb-4">{`${
              menuItem.charAt(0).toUpperCase() + menuItem.slice(1)
            }'s ${prodSubCat?.name || prodCat?.name}`}</p>
            <div className=" flex justify-center max-w-[800px] mx-auto px-4 mb-4">
              <div className={`${!showFullDesc ? "flex" : ""}`}>
                <span className={`${!showFullDesc ? "line-clamp-1 " : ""} `}>
                  {prodSubCat?.description || prodCat?.description}
                </span>{" "}
                <span
                  onClick={toggleDesc}
                  className={`underline text-sm whitespace-nowrap cursor-pointer ${
                    !showFullDesc ? " flex-shrink-0" : ""
                  }`}
                >
                  {showFullDesc ? "Read less" : "Read more"}
                </span>
              </div>
            </div>
            <p className="px-6 font-semibold overflow-x-auto whitespace-nowrap custom-scrollbar-hidden text-center mb-4">
              {recommendedList?.map((x) => {
                return (
                  <span className="px-3 hover:underline cursor-pointer">
                    {x?.name?.toUpperCase() || x?.toUpperCase()}
                  </span>
                );
              })}
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-1  w-full ">
              {SampleProducts.map((product) => {
                return <SingleProduct product={product} />;
              })}
            </div>
          </div>
        ) : (
          <p className="text-center text-[30px]"> Items not found</p>
        )}
      </Layout>
    </>
  );
};
export { ProductList };
