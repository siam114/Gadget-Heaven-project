import React, { createContext, useState, useContext, useEffect } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [products, setProducts] = useState([]);
  // console.log(products)

  const getStoreCartList = () => {
    const storedListStr = localStorage.getItem("cart");
    if (storedListStr) {
      const storedList = JSON.parse(storedListStr);
      const cartProduct = products.filter((item) =>
        storedList.includes(item.product_id)
      );
      setCart(cartProduct);
    }
  };
  const getStoreWishList = () => {
    const storedListStr = localStorage.getItem("wishList");
    
    if (storedListStr) {
      const storedList = JSON.parse(storedListStr);
      
      const cartProduct = products.filter((item) =>
        storedList.includes(item.product_id)
      );
     
      setWishList(cartProduct);
    }
  };

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    if (products.length) {
      getStoreCartList();
      getStoreWishList();
    }
  }, [products]);

  const values = {
    cart,
    setCart,
    wishList,
    setWishList,
    products,
    setProducts,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
export const useProduct = () => {
  return useContext(ProductContext);
};
