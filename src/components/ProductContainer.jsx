import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import ProductCard from "./ProductCard";

const ProductContainer = () => {
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  return (
    <div className="h-full bg-slate-200 col-span-10">
      {loading ? (
        <Loading />
      ) : error ? (
        <h1>مشکلی به وجود آمده است</h1>
      ) : products.length === 0 ? (
        <div className="w-full h-full flex items-center justify-center">
            <h1 className="font-body text-3xl ">با توجه به فیلتری که اعمال کردید کالایی وجود ندارد</h1>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-8 p-4">
          {products.map((mobile) => (
            <ProductCard key={mobile.id} phoneInfo={mobile} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductContainer;
