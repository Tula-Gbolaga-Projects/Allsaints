import { useState } from "react";
import { Layout } from "../components/shared";
import { SampleProducts } from "../utils/data";
import { ImgViewerSM, ImgViewerLg } from "../components/productDetails";
import WishlistIcon from "../assets/wishlisticon.png";

const ProductDetails = () => {
  const [selectedInfo, setSelectedInfo] = useState("design");
  const [activeTab, setActiveTab] = useState("Design");
  const imageUrls = SampleProducts[0].images["#000000"];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const tabs = ["Design", "Details", "Delivery & Returns"];
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2  ">
        <ImgViewerLg images={imageUrls} />
        <ImgViewerSM images={imageUrls} />
        <div className="p-[10px] pt-4 lg:pl-[50px] lg:pr-[150px] lg:pt-[50px]">
          <p className="pb-[30px] text-[25px]">{`Men > clothing > knitwear`}</p>
          <p className="text-[20px]">Mandon Crochet Knit Shirt</p>
          <p className="text-[30px]">£149.00</p>
          <p>
            <span className="font-bold">Color:</span> <span>Green Multi</span>
          </p>
          <p className="flex justify-between">
            <span className="font-bold">UK SIZE:</span>{" "}
            <span className="underline">Size Guide</span>
          </p>
          <div>
            {sizes.map((size) => {
              return (
                <button
                  key={size}
                  className="border mr-4 py-2 px-4 mb-2 hover:bg-black hover:text-white"
                >
                  {size}
                </button>
              );
            })}
          </div>
          <div className="flex space-x-2">
            <button className=" flex-1 bg-black text-white text-center py-2">
              {" "}
              ADD TO BAG
            </button>{" "}
            <button className="px-3 py-1 border border-gray-500">
              {" "}
              <img
                src={WishlistIcon}
                alt="Wishlist"
                className="w-7 h-7 object-contain"
              />
            </button>
          </div>
          <p className="mb-[30px]">Free delivery on all orders</p>
          <div className="w-full border-b-3 border-gray-100">
            <div className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`uppercase tracking-wide font-semibold text-sm pb-2 relative
              ${activeTab === tab ? "text-black" : "text-gray-500"}
            `}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute left-0 bottom-[-3px] h-[3px] w-full bg-black"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export { ProductDetails };
