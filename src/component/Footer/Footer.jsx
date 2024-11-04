import React from "react";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-5 my-5 bg-[#FFFFFF]">
      <div className="text-center">
        <h4 className="text-3xl font-bold pb-3">Gadget Heaven</h4>
        <p>Leading the way in cutting-edge technology and innovation.</p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:place-items-center ml-10 sm:ml-0">
        <div className="text-gray-500 text-base sm:mt-10">
            <h5 className="text-xl font-semibold text-black pb-3">Services</h5>
            <p>Product Support</p>
            <p>Order Tracking</p>
            <p>Shipping & Delivery</p>
            <p>Return</p>
        </div>
        <div className="text-gray-500 text-base">
            <h5 className="text-xl font-semibold text-black pb-3">Company</h5>
            <p>Product Support</p>
            <p>Order Tracking</p>
            <p>Shipping & Delivery</p>
            <p>Return</p>
        </div>
        <div className="text-gray-500 text-base">
            <h5 className="text-xl font-semibold text-black pb-3">Legal</h5>
            <p>Product Support</p>
            <p>Order Tracking</p>
            <p>Shipping & Delivery</p>
            <p>Return</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
