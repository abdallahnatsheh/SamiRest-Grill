import React, { useEffect, useReducer } from "react";

import ShopContext from "./shop-context";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";
import { useGetMainMenuMeals } from "../Components/firebase/mainMenuHooks/mainMenuHook";
import useLocalStorage from "../Hooks/useLocalStorage";
function fixList(list) {
  let temp = [];
  list.map((item) => temp.push({ ...item.data(), quantity: 0, id: item.id }));
  return temp;
}
let menuList = [];

const GlobalState = (props) => {
  //get menu list from firestore
  const [menuItemsData] = useGetMainMenuMeals();
  if (menuItemsData.length !== 0) {
    //fix the list into array with id and quantity because firebase uses item.id
    //to get it so this fix make it easy to search the cart and count the quantity
    menuList = fixList(menuItemsData);
  }
  const products = menuList;
  //initialize cart storage cookie
  const [storageCart, setStorageCart] = useLocalStorage("cart", []);
  const [cartState, dispatch] = useReducer(shopReducer, {
    cart: storageCart.cart ? storageCart.cart : storageCart,
  });
  useEffect(() => {
    if (cartState && cartState !== null) {
      setStorageCart(cartState);
    }
  }, [cartState]);

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = (product) => {
    dispatch({ type: REMOVE_PRODUCT, product: product });
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
