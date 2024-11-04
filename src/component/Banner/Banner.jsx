import React from "react";
import image from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="border-2 p-2 rounded-md mx-2">
        <div className="hero bg-[#9538E2] text-white py-5 rounded-md ">
          <div className="hero-content text-center">
            <div className="max-w-2xl sm:pb-36 pb-40">
              <h1 className="text-4xl font-bold pt-5">
                Upgrade Your Tech Accessorize with Gadget Heaven Accessories
              </h1>
              <p className="py-6">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
              <button className="btn rounded-full text-[#9538E2]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:w-7/12 w-10/12 mx-auto border-2 p-3 rounded-lg relative -top-[150px]">
        <img className="h-[200px] sm:h-[400px] w-full rounded-lg" src={image} alt="" />
      </div>
    </div>
  );
};

export default Banner;
