import React from "react";

const Footer = () => {
  return (
    <div className="py-10 my-5 bg-[#9538e22c] rounded-md">
      <div className="text-center pb-10">
        <h4 className="text-3xl font-bold pb-3">Gadget Heaven</h4>
        <p>Leading the way in cutting-edge technology and innovation.</p>
      </div>


      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:place-items-center ml-10 sm:ml-0">
        <div className="text-gray-500 text-base">
            <h5 className="text-xl font-semibold text-black pb-3">Services</h5>
            <p>Product Support</p>
            <p>Order Tracking</p>
            <p>Shipping & Delivery</p>
            <p>Return</p>
        </div>
        <div className="text-gray-500 text-base">
            <h5 className="text-xl font-semibold text-black pb-3">Company</h5>
            <p>About Us</p>
            <p>Careers</p>
            <p>Contact</p>
            <p>Return</p>
            
        </div>
        <div className="text-gray-500 text-base">
            <h5 className="text-xl font-semibold text-black pb-3">Legal</h5>
            <p>Term of Survice</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Return</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
