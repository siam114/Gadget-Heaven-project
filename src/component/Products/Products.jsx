import React, { useMemo, useState } from "react";
import Product from "./Product/Product";
import Category from "../Category/Category";
import { useLoaderData } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";

const Products = () => {
  const { products } = useProduct();
  const category = useLoaderData();
  console.log(category);
  const [selected, setSelected] = useState(1);
  console.log(selected);

  const filteredProducts = useMemo(
    () =>
      selected == 1
        ? products
        : products.filter((item) => item.category_id == selected),
    [selected, products]
  );

  return (
    <div className="mb-10 sm:mb-20">
      <h2 className="text-3xl font-bold text-center pb-10">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="sm:flex sm:justify-between mx-5 sm:mx-auto gap-5">
        <div className="flex justify-center sm:h-[300px] sm:w-[300px]">
          <Category
            selected={selected}
            setSelected={setSelected}
            category={category}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.length > 0? filteredProducts.map((product) => (
            <Product key={product.product_id} product={product} />
          )): <p className="text-2xl font-bold text-center">Data Not Available</p>}
        </div>
      </div>
    </div>
  );
};

export default Products;
