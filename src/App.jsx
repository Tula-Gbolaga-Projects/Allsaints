import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import { Home, ProductList } from "./pages";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:menuItem" element={<Home />} />
      <Route
        path="/:menuItem/:category/:subCategory?"
        element={<ProductList />}
      />
    </Routes>
  );
}

export default App;
