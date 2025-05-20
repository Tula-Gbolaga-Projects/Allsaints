import { ProductImageViewer } from "../components/productDetails/ImgViewerLg";
import { Layout } from "../components/shared";
import { SampleProducts } from "../utils/data";

const ProductDetails = () => {
  const imageUrls = SampleProducts[0].images["#000000"];
  return (
    <Layout>
      <div className="grid grid-cols-2 h-screen ">
        <ProductImageViewer images={imageUrls} />
        <div className="bg-red-500"></div>
      </div>
    </Layout>
  );
};
export { ProductDetails };
