import React, { useContext } from "react";
import shopContext from "../../../context/shop-context";
import { useNavigate } from "react-router-dom";
import "./styles.css";
/*
cart button component that shows  how many items in the cart 
its existed in navbar
*/
const ButtonCartCount = React.memo(function ButtonCartCount() {
  const context = useContext(shopContext);

  let cartCount = context.cart.reduce((count, curItem) => {
    return count + curItem.quantity;
  }, 0);

  const navigate = useNavigate();
  return (
    <div className="btnCartCount" onClick={() => navigate("/cart")}>
      <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
      <i className="fas fa-shopping-cart"></i>
    </div>
  );
});

export default ButtonCartCount;
