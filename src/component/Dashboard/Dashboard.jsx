import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {  getStoreCartList } from "../../utility/addToCart";
import Cart from "../Cart/Cart";
import Wishlist from "../WishLish/Wishlist";

const Dashboard = () => {
  const [cartList, setCartList] = useState([]);
   const allCart = useLoaderData();

   useEffect(()=>{
     const storeCartList = getStoreCartList();
     const storeCartListInt = storeCartList.map(id => parseInt(id))
     
     const cartList = allCart.filter(book => storeCartListInt.includes(book.product_id))
     setCartList(cartList)
   },[])
  return (
    <div>
      <Tabs>
        <div className="text-white bg-[#9538E2] text-center py-10">
          <h3 className="text-2xl font-bold pb-5">Dashboard</h3>
          <p className="w-7/12 mx-auto">
            Explore the latest gadgets that will take your experience to the next
            level. From smart devices to the coolest accessories, we have it all!
          </p>
          
          <TabList className="flex gap-3 justify-center py-5">
            <Tab className="px-10 py-3 border border-white rounded-full font-semibold hover:text-[#9538E2] hover:bg-white cursor-pointer">
              Cart
            </Tab>
            <Tab className="px-10 py-3 border border-white rounded-full font-semibold hover:text-[#9538E2] hover:bg-white cursor-pointer">
              Wishlist
            </Tab>
          </TabList>
        </div>

        <div className="py-5">
          <TabPanel>
           <div>
           <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Cart : {cartList.length}</h2>
              <div className="flex items-center gap-5">
                <p className="text-lg font-bold">Total Cost: 0</p>
                <div>
                <button className="text-[#9538E2] font-medium border border-[#9538E2] px-3 py-1 hover:bg-[#9538E2] hover:text-white rounded-full">Sort by Price</button>
                <button className="ml-5 text-white bg-[#9538E2] px-4 py-2 rounded-full font-medium hover:text-[#9538E2] hover:bg-white hover:border hover:border-[#9538E2]">Purchase</button>
                </div>
              </div>
            </div>
            <div>
              {
                cartList.map(product => <Cart key={product.product_id} product={product}/>)
              }
            </div>
           </div>
          </TabPanel>
          
          <TabPanel>
            <div className="">
              <h2 className="text-xl font-bold">Wishlist</h2>
              <div>
                {
                  cartList.map(product => <Wishlist key={product.product_id} product={product}/>)
                }
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Dashboard;
