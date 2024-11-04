import React from "react";
import Delete from '../../assets/delete.png'

const Cart = ({ product }) => {
  const { product_image, product_title, price, description } = product;
  return (
    <div className="flex items-center border my-5 rounded-lg">
      <div>
        <figure className="p-5">
          <img
            src={product_image}
            className="h-[100px] w-[150px] rounded-md"
            alt={product_title}
          />
        </figure>
      </div>
      <div>
        <h2 className="card-title">{product_title}</h2>
        <p className="text-gray-500 text-lg">{description}</p>
        <p className="text-gray-500 text-lg">Price: {price}$</p>
      </div>
      <div className="ml-auto mr-10">
        <button><img src={Delete} alt="" /></button>
      </div>
    </div>
  );
};

export default Cart;
