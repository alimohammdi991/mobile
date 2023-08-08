import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../slices/productSlice";
import debounce from "lodash.debounce";

const FilterColor = () => {
  const [colors, setColors] = useState([]);
  const dispatch = useDispatch();

  const chooseColor = (e) => {
    if (colors.includes(e.target.getAttribute("data-color"))) {
      const copyOfArray = [...colors];
      const indexOfcolor = colors.findIndex(
        (color) => color === e.target.getAttribute("data-color")
      );
      copyOfArray.splice(indexOfcolor, 1);
      setColors(copyOfArray);
    } else {
      setColors([...colors, e.target.getAttribute("data-color")]);
    }
  };

  const applyFilter = debounce(() => {
    dispatch(setFilter({ type: "FILTER_COLOR", payload: colors }));
  }, 1000);

  useEffect(() => {
    applyFilter();
  }, [colors]);

  return (
    <>
      {/* color filter */}
      <div className="flex flex-col">
        <h1 className="font-body font-bold text-3xl">رنگ</h1>
        <div className="flex flex-col gap-y-2 text-xl">
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              id="red"
              className="form-checkbox rounded-sm border-none bg-slate-400"
              name="red"
              data-color="#dc2626"
              onChange={chooseColor}
            />
            <label htmlFor="red">قرمز</label>
          </div>
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              id="purple"
              className="form-checkbox rounded-sm border-none bg-slate-400"
              name="purple"
              data-color="#4c1d95"
              onChange={chooseColor}
            />
            <label htmlFor="purple">بنفش</label>
          </div>
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              id="jigari"
              className="form-checkbox rounded-sm border-none bg-slate-400"
              name="jigari"
              data-color="#9d174d"
              onChange={chooseColor}
            />
            <label htmlFor="jigari">جیگری</label>
          </div>
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              id="blue"
              className="form-checkbox rounded-sm border-none bg-slate-400"
              name="blue"
              data-color="#1d4ed8"
              onChange={chooseColor}
            />
            <label htmlFor="blue">آبی</label>
          </div>
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              id="black"
              className="form-checkbox rounded-sm border-none bg-slate-400"
              name="black"
              data-color="#020617"
              onChange={chooseColor}
            />
            <label htmlFor="black">مشکی</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterColor;
