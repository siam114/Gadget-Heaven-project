import React, { useMemo } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cart from "../Cart/Cart";
import Wishlist from "../WishLish/Wishlist";
import { useProduct } from "../../context/ProductContext";
import modalImg from "../../assets/Group.png";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { cart, wishList, setCart } = useProduct();
  const navigate = useNavigate();

  const totalCost = useMemo(
    () => cart.reduce((total, item) => total + item.price, 0),
    [cart]
  );

  const sortCartByPriceDescending = () => {
    setCart([...cart].sort((a, b) => b.price - a.price));
  };

  const handlePurchase = () => {
    document.getElementById("my_modal_1").showModal();
    setCart([]);
  };

  const handleCloseModal = () => {
    navigate("/");
  };

  return (
    <div>
      <Tabs>
        <div className="text-white bg-[#9538E2] text-center py-10">
          <h3 className="text-2xl font-bold pb-5">Dashboard</h3>
          <p className="w-7/12 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
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
                <h2 className="text-xl font-bold">Cart : {cart.length}</h2>
                <div className="flex items-center gap-5">
                  <p className="text-lg font-bold">Total Cost: ${totalCost}</p>
                  <div>
                    <button
                      onClick={() => sortCartByPriceDescending()}
                      className="text-[#9538E2] font-medium border border-[#9538E2] px-3 py-1 hover:bg-[#9538E2] hover:text-white rounded-full"
                    >
                      Sort by Price
                    </button>
                    <button
                       onClick={handlePurchase}
                       className={`ml-5 text-white bg-[#9538E2] px-4 py-2 rounded-full font-medium hover:text-[#9538E2] hover:bg-white hover:border hover:border-[#9538E2] ${
                        (cart.length === 0 || totalCost === 0) && "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
              <div>
                {cart.map((product) => (
                  <Cart key={product.product_id} product={product} />
                ))}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="">
              <h2 className="text-xl font-bold">Wishlist</h2>
              <div>
                {wishList.map((product) => (
                  <Wishlist key={product.product_id} product={product} />
                ))}
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
      {/* added modal */}
      <dialog id="my_modal_1" className="modal text-center">
        <div className="modal-box">
          <img className="mx-auto my-5" src={modalImg} alt="" />
          <h3 className="font-bold text-3xl">Payment Successfully</h3>
          <p className="py-4">
            Thanks for purchasing. <br />
            Total: ${totalCost}
          </p>
          <div className="">
            <form method="dialog">
              <button onClick={handleCloseModal} className="btn w-full">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
