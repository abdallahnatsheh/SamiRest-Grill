import React, { useContext } from "react";
import EmptyCart from "./EmptyCart";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import Menu from "../Menu";
import shopContext from "../../context/shop-context";
import "./styles.css";
/*
cart component that show what is in the cart and take what is existed in the context cookies storage
if there is nothing to show empty cart component 
*/
const Cart = () => {
  const context = useContext(shopContext);
  let cartTotal = 0;
  context.cart.map((item) => (cartTotal += item.totalPrice));
  return (
    <>
      <Header />
      <div className="cart-header"></div>
      {context.cart.length <= 0 ? (
        <EmptyCart />
      ) : (
        <div className="orders">
          <h1 className="orders-heading">طلباتك</h1>
          <div className="orders-menu">
            <Menu list={context.cart} />
          </div>
          <h3 className="orders-total">NIS {cartTotal} المجموع الكلي</h3>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Cart;
