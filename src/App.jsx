import "./App.css";
import { Routes, Route } from "react-router";
import { Home, ProductDetails, ProductList } from "./pages";
import { ListXDetailsRouter } from "./components/productList/listXDetailsRouter";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:menuItem" element={<Home />} />
      <Route path="/:menuItem/:category/*" element={<ProductList />} />
      <Route
        path="/:menuItem/:category/:subCategory?/:productId"
        element={<ListXDetailsRouter />}
      />
    </Routes>
  );
}

export default App;
