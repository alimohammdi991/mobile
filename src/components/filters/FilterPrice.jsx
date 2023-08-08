import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../slices/productSlice";

const FilterPrice = () => {
  const [price, setPrice] = useState(80000000);

  const tooltipRef = useRef(null);
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const applyFilterPrice = () => {
    dispatch(setFilter({ type: "FILTER_PRICE_RANGE", payload: price }));
  };

  const moveToolTip = () => {
    const { value, max } = inputRef;
    const inputRangePosition =
      (inputRef.current.value / inputRef.current.max) * 100;
    tooltipRef.current.style.left = `${inputRangePosition}%`;
  };

  useEffect(() => {
    moveToolTip();
    applyFilterPrice();
  }, [price]);

  return (
    <>
      <div dir="rtl">
        <h1 className="text-2xl font-body font-bold mb-4">
          فیلتر بر اساس قیمت
        </h1>
        <div className="flex gap-x-3">
          <span>80,000,000</span>
          <div dir="ltr" className="relative">
            <input
              ref={inputRef}
              type="range"
              min={1000000}
              max={80000000}
              value={price}
              onChange={handlePriceChange}
            />
            <span
              ref={tooltipRef}
              className="bg-orange-500 bg-opacity-30 border-2 border-orange-500  text-black rounded-lg px-2 py-1 "
              style={{ position: "absolute", left: "50px", top: "18px" }}
            >
              {Number(price).toLocaleString()}
            </span>
          </div>
          <span>1,000,000</span>
        </div>
      </div>
    </>
  );
};

export default FilterPrice;
