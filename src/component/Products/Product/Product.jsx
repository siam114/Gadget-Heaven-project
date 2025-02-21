import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {product_id, product_image, product_title, price } = product;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="p-5">
          <img
            src={product_image}
            className="h-[180px] w-full rounded-md"
            alt={product_title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p className="text-gray-500 text-lg">Price: {price}$</p>
          <div className="card-actions">
            <Link to={`/products/${product_id}`}><button className="border border-[#9538E2] text-[#9538E2] text-base font-medium hover:bg-[#9538E2] hover:text-white px-4 py-2 rounded-full">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
