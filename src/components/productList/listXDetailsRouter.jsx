import { useLocation } from "react-router";
import { ProductDetails, ProductList } from "../../pages";
const ListXDetailsRouter = () => {
  const location = useLocation();

  const isValidProductId = (str) => {
    return /^m[a-zA-Z0-9]+-\d+$/i.test(str);
  };

  const segments = location.pathname.split("/").filter(Boolean);
  const lastElement = segments[segments.length - 1];
  if (isValidProductId(lastElement)) {
    return <ProductDetails />;
  } else {
    return <ProductList />;
  }
};
export { ListXDetailsRouter };
