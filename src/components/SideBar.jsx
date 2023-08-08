import React, { useEffect, useState } from "react";
import FilterColor from "./filters/FilterColor";
import FilterPrice from "./filters/FilterPrice";

const SideBar = () => {
  return (
    <div
      dir="rtl"
      className="h-full bg-slate-100 col-span-2 font-body shadow-xl p-4 flex flex-col gap-y-6"
    >
      <FilterColor />
      <FilterPrice />
    </div>
  );
};

export default SideBar;
