import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Header from "./component/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
