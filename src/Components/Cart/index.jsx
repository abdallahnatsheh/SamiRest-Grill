import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import EmptyCart from "./EmptyCart";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import Menu from "../Menu";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import "./styles.css";

/*
cart component that show what is in the cart and take what is existed in the redux store
if there is nothing to show empty cart component 
*/
const Cart = ({ cartCount, cartList, cartTotal }) => {
  return (
    <>
      <Header />
      <div className="cart-header"></div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className="orders">
          <h1 className="orders-heading">طلباتك</h1>
          <div className="orders-menu">
            <Menu list={cartList} />
          </div>
          <h3 className="orders-total">NIS {cartTotal} المجموع الكلي</h3>
        </div>
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
