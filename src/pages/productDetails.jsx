import { useState, useEffect } from "react";
import { Layout } from "../components/shared";
import { SampleProducts } from "../utils/data";
import {
  ImgViewerSM,
  ImgViewerLg,
  RecommendationSlider,
} from "../components/productDetails";
import WishlistIcon from "../assets/wishlisticon.png";
import {
  DelCal,
  DelVan,
  Klarna,
  Returns,
  SourcedItems,
  StanDel,
} from "../assets/prodDetailsPg";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("Design");
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [selectedColor, setSelectedColor] = useState();
  const imageUrls = SampleProducts[0].images["#000000"];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const tabs = ["Design", "Details", "Delivery & Returns"];
  const designFeatures = [
    "This shirt is designed to a slim fit",
    "Long sleeve",
    "Cuffed sleeves",
    "Button closure",
    "Ramskull embroidery",
    "Stretch fit",
    "Pigment dyed",
  ];

  useEffect(() => {
    setSelectedColor(sampleColors[0]);
  }, []);

  const productDetails = [
    "Slim fit",
    'Model dimensions: Height: 6\'1"/186cm, Waist: 30.5", Chest: 36.5"',
    "The model is wearing size Medium",
    "98% organic cotton, 2% elastane",
    "Machine wash inside out",
    "Organic cotton, when compared with conventionally-grown cotton, uses better growing practices such as no artificial pesticides, improved water irrigation techniques and encourages beneficial biodiversity.",
  ];

  const sampleColors = [
    "#FF5733", // bright red-orange
    "#33C1FF", // sky blue
    "#28A745", // green
    "#FFC107", // amber
  ];

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2  ">
        <ImgViewerLg images={imageUrls} />
        <ImgViewerSM images={imageUrls} />
        <div className="p-[10px] pt-4 lg:pl-[100px] lg:pr-[150px] lg:pt-[50px]">
          <p className="pb-[30px] text-[25px]">{`Men > clothing > knitwear`}</p>
          <p className="text-[20px]">Mandon Crochet Knit Shirt</p>
          <p className="text-[30px]">£149.00</p>
          <div className="flex items-center my-3 ">
            <div className="mr-3">
              <Klarna className="w-full h-full" />
            </div>
            <div>
              <p className="text-sm">
                Make 3 payments of £45
                <span className="underline pl-1 cursor-pointer">
                  Learn more
                </span>
              </p>
              <p className="text-gray-600 text-sm">Interest-free payment</p>
            </div>
          </div>
          <p>
            <span className="font-bold">Color:</span> <span>Green Multi</span>
          </p>

          <div className="flex gap-3 my-5">
            {sampleColors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full  ${
                  selectedColor === color
                    ? "ring-2 ring-black border-white border-2"
                    : ""
                }`}
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>

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
          {activeTab === "Design" && (
            <div>
              <p className={`${!showFullDesc ? "line-clamp-2 " : ""} mt-2  `}>
                The Hawthorne Shirt - it doesn't get more classic. Crafted from
                a stretch cotton blend fabric, in a slim fit. Our signature
                Ramskull sits embroidered on the chest. This style remains a
                go-to, it's got an ease to it that's unmatche{" "}
              </p>
              <button
                className="underline"
                onClick={() => {
                  setShowFullDesc((prev) => !prev);
                }}
              >
                Read More
              </button>
              <ul className="list-disc pl-5 mt-3">
                {designFeatures.map((feature, index) => {
                  return (
                    <li className={`${index === 0 ? "font-bold" : ""}`}>
                      {feature}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {activeTab === "Details" && (
            <div>
              <ul className="list-disc pl-5 mt-3">
                {productDetails.map((detail) => {
                  return <li>{detail}</li>;
                })}
              </ul>
              <p className="py-2">Made in : China</p>
              <p className="py-2">Product ID: Mqw233-324</p>
            </div>
          )}
          {activeTab === "Delivery & Returns" && (
            <div>
              <div className="flex justify-between my-5 ">
                <div className="flex">
                  <div className="pr-[30px]">
                    {" "}
                    <StanDel className="w-full h-full" />
                  </div>
                  <div>
                    <p className="font-bold">Standard Delivery</p>
                    <p className="pr-[40px] text-gray-500">
                      Delivered within 2-4 working days, outlying areas may take
                      longer.
                    </p>
                  </div>
                </div>
                <p>Free</p>
              </div>
              <div className="flex justify-between my-5 ">
                <div className="flex">
                  <div className="pr-[30px]">
                    {" "}
                    <DelVan className="w-full h-full" />
                  </div>
                  <div>
                    <p className="font-bold">Next Day Delivery</p>
                    <p className="pr-[40px] text-gray-500">
                      Order by 7pm Monday to Thursday. Orders placed between 7pm
                      on Thursday and 2pm Saturday will be delivered on Monday.
                    </p>
                  </div>
                </div>
                <p>£5.95</p>
              </div>
              <div className="flex justify-between my-5 ">
                <div className="flex">
                  <div className="pr-[30px]">
                    {" "}
                    <DelCal className="w-full h-full" />
                  </div>
                  <div>
                    <p className="font-bold">Saturday Delivery</p>
                    <p className="pr-[40px] text-gray-500">
                      Order by 2pm Friday.
                    </p>
                  </div>
                </div>
                <p>£9.95</p>
              </div>
              <div className="flex justify-between my-5 ">
                <div className="flex">
                  <div className="pr-[30px]">
                    {" "}
                    <DelCal className="w-full h-full" />
                  </div>
                  <div>
                    <p className="font-bold">Sunday Delivery</p>
                    <p className="pr-[40px] text-gray-500">
                      Order by 2pm Saturday.
                    </p>
                  </div>
                </div>
                <p>£9.95</p>
              </div>
              <div className="flex justify-between my-5 ">
                <div className="flex">
                  <div className="pr-[30px]">
                    {" "}
                    <SourcedItems className="w-full h-full" />
                  </div>
                  <div>
                    <p className="font-bold">Store sourced Items</p>
                    <p className="pr-[40px] text-gray-500">
                      Will be delivered separately within 3-5 working days
                    </p>
                  </div>
                </div>
                <p className="invisible">..</p>
              </div>
              <div className="flex justify-between my-5 ">
                <div className="flex">
                  <div className="pr-[30px]">
                    {" "}
                    <Returns className="w-full h-full" />
                  </div>
                  <div>
                    <p className="font-bold">Returns</p>
                    <p className="pr-[40px] text-gray-500">
                      Free returns within 28 days for the UK.
                    </p>
                    <p className="text-gray-500">
                      Exclusions apply, please see our{" "}
                      <span className="underline cursor-pointer">FAQs</span>
                    </p>
                  </div>
                </div>
                <p></p>
              </div>
            </div>
          )}
        </div>
      </div>
      <RecommendationSlider />
    </Layout>
  );
};
export { ProductDetails };
