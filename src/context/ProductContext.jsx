import React, { createContext, useState, useContext, useEffect} from "react";

const ProductContext = createContext();


const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [products, setProducts] = useState([]);

  const getStoreCartList = () => {
    const storedListStr = localStorage.getItem("cart");
    if (storedListStr) {
      const storedList = JSON.parse(storedListStr);
      const cartProduct = products.filter((item) =>
        storedList.includes(item.id)
      );
      setCart(cartProduct);
    }
  };
  const getStoreWishList = () => {
    const storedListStr = localStorage.getItem("wishList");
    if (storedListStr) {
      const storedList = JSON.parse(storedListStr);
      const cartProduct = products.filter((item) =>
        storedList.includes(item.id)
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
    getStoreCartList();
    getStoreWishList();
      
  }, [products.length]);

  const values={
    cart, setCart,
    wishList, setWishList,
    products, setProducts
  }
  return <ProductContext.Provider value={values}>{children}</ProductContext.Provider>;
};

export { ProductContext, ProductProvider };
export const useProduct = () => {
  return useContext(ProductContext);
};
