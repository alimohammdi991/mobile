import React, { useState } from "react";

const products = [
  { id: 1, name: "موبایل 1", colors: ["قرمز", "مشکی"] },
  { id: 2, name: "موبایل 222", colors: ["قرمز", "مشکی"] },
  { id: 3, name: "موبای333 1", colors: ["قرمز", "مشکی"] },
  { id: 4, name: "موبایل 2", colors: ["آبی", "سفید"] },
  { id: 5, name: "موبایل 3", colors: ["زرد", "صورتی"] },
  // ...
];

function ProductFilter() {
  const [selectedColors, setSelectedColors] = useState([]);

  const handleColorChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedColors([...selectedColors, value]);
    } else {
      setSelectedColors(selectedColors.filter((color) => color !== value));
    }
  };

  const filteredProducts = products.filter((product) => {
    if (selectedColors.length === 0) {
      return true;
    }
    return product.colors.some((color) => selectedColors.includes(color));
  });

  return (
    <div className="flex flex-col">
      <label>
        <input
          type="checkbox"
          value="قرمز"
          checked={selectedColors.includes("قرمز")}
          onChange={handleColorChange}
        />
        قرمز
      </label>
      <label>
        <input
          type="checkbox"
          value="آبی"
          checked={selectedColors.includes("آبی")}
          onChange={handleColorChange}
        />
        آبی
      </label>
      <label>
        <input
          type="checkbox"
          value="زرد"
          checked={selectedColors.includes("زرد")}
          onChange={handleColorChange}
        />
        زرد
      </label>

      <h2>محصولات فیلتر شده:</h2>
      {filteredProducts.map((product) => (
        <div key={product.id} className="flex gap-x-4">
          <span>{product.name}</span>
          <span>{JSON.stringify(product.colors)}</span>
        </div>
      ))}
    </div>
  );
}

export default ProductFilter;
