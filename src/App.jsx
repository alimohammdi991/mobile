import React from "react";
import ProductContainer from "./components/ProductContainer";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-red-100 grid grid-cols-12">
        <ProductContainer />
        <SideBar />
      </div>
    </>
  );
};

export default App;
