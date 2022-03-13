import React, { useContext } from "react";
import EmptyCart from "./EmptyCart";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import Menu from "../Menu";
import shopContext from "../../context/shop-context";
import "./styles.css";
import { Button } from "react-bootstrap";
import ResponsiveDialog from "./CheckOutDialog";
/*
cart component that show what is in the cart and take what is existed in the context cookies storage
if there is nothing to show empty cart component 
*/
const textStyle = {
  color: "white",
};
const loginBtnStyle = {
  background: "rgb(210,141,8)",
  color: "rgb(0,0,0)",
  borderWidth: "0px",
  borderColor: "rgb(210,141,8)",
  padding: "20px",
};
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
          <h1 className="orders-heading" style={textStyle}>
            طلباتك
          </h1>
          <div className="orders-menu">
            <Menu list={context.cart} />
          </div>
          <ResponsiveDialog className="orders-total btn btn-primary border rounded-pill d-block btn-user" />
        </div>
      )}
      <Footer />
    </>
  );
};

export default Cart;
