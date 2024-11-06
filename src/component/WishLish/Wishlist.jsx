import React from "react";
import Delete from "../../assets/delete.png";
import { useProduct } from "../../context/ProductContext";
import { deleteFromWishList } from "../../utility/addToCart";

const Wishlist = ({ product }) => {
  const {product_id, product_image, product_title, price, description } = product;
  const {setWishList} = useProduct();
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
        <button className="px-3 py-1 bg-[#9538E2] text-white rounded-full mt-3">Add to Card</button>
      </div>
      <div className="ml-auto mr-10">
        <button  onClick={() => {
                    setWishList((prev) => {
                      console.log(prev,'prev')
                      const val = [...prev.filter(item => item.product_id !== product_id)]
                      
                      return val
                    });
                    deleteFromWishList(product_id)
                  }}>

          <img src={Delete} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
