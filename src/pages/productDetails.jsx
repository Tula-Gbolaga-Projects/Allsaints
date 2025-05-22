import { Layout } from "../components/shared";
import { SampleProducts } from "../utils/data";
import { ImgViewerSM, ImgViewerLg } from "../components/productDetails";

const ProductDetails = () => {
  const imageUrls = SampleProducts[0].images["#000000"];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2  ">
        <ImgViewerLg images={imageUrls} />
        <ImgViewerSM images={imageUrls} />
        <div className="p-[10px] lg:px-[100px] pt-4 lg:pt-[50px]">
          <p className="pb-[30px]">{`Men > clothing > knitwear`}</p>
          <p>Mandon Crochet Knit Shirt</p>
          <p>£149.00</p>
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
                  className="border mr-4 py-2 px-4 hover:bg-black hover:text-white"
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export { ProductDetails };
