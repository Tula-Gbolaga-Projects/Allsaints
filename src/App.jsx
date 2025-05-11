import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import { Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export default App;
