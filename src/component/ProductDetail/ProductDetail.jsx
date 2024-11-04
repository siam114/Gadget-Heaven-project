import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import imageCart from '../../assets/cart.png'
import imageHeart from '../../assets/heart.png'

const ProductDetail = () => {
  const { Id } = useParams();

  const data = useLoaderData();

  const product = data.find((product) => product.product_id === parseInt(Id));

  const {
    product_image,
    product_title,
    price,
    description,
    specification,
    rating,
  } = product;
  return (
    <div>
      <div className="text-white bg-[#9538E2] text-center py-10 ">
        <h3 className="text-2xl font-bold pb-5">Product Details</h3>
        <p className="w-7/12 mx-auto pb-36 sm:pb-40">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="w-9/12 p-3 mx-auto relative -top-[170px]">
        <div className="hero bg-base-200 border p-2 rounded-lg">
          <div className="flex justify-between items-start gap-10">
            <img
              src={product_image}
              className="w-[400px] h-[500px] rounded-lg shadow-2xl"
            />
            <div className="text-start pt-5">
              <h3 className="text-2xl font-bold">{product_title}</h3>
              <p className="pt-3 text-lg font-semibold">Price: {price}$</p>
              <div className="bg-[#2f9c0828] rounded-full border border-[#309C08] w-28 text-center my-3">
               <p className="text-[#309C08]  px-3 py-1">In Stock</p>
              </div>
              <p className="pt-3">{description}</p>
              <div>
                 <h5 className="font-semibold py-3 text-lg">Specification : </h5>
                {
                    specification.map((specification, index) => <ul><li key={index}>{index+1}. {specification}</li></ul>)
                }
                </div>
              <p className="pt-3"><span className="font-bold">Rating :</span> {rating}</p>

              <div className="py-5 flex items-center gap-2">
              <button className="border-2 bg-[#9538E2] text-white px-3 py-1 rounded-full">Add To Card <img className="inline-flex items-center justify-center w-5 h-5" src={imageCart} alt="" /></button>
              <button className="border-2 p-1 rounded-full"><img className="w-5 h-5 " src={imageHeart} alt="" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
