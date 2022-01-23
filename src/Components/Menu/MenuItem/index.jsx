import React from "react";
import Badge from "react-bootstrap/Badge";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { cartAddItem, cartRemoveItem } from "../../../redux/cart/cart.action";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../../redux/cart/cart.selector";

import ButtonAddRemoveItem from "../../ButtonAddRemoveItem";
import "./styles.css";
/**
 * this component build the item shape with picture , name , price,add product component
 * and dispatch actions with redux.
 * 
        <p className="head_desc-info">
          <small>{info}</small>
        </p> 

 */
const MenuItem = ({
  item,
  cartCount,
  cartList,
  cartAddItem,
  cartRemoveItem,
}) => {
  const { id, img, name, price, info, deals } = item;

  const handleQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find((item) => item.id === id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };

  return (
    <div className="item menuItems" id={item.id}>
      <img id="menuImages" src={img} alt="food" />
      <div className="item-head_desc">
        <p className="head_desc-name">{name}</p>
      </div>
      {deals.enabled ? (
        <div>
          <Badge pill bg="warning" text="dark" className="item-food-discount ">
            <small> %{deals.value} :خصم</small>
            <br />
            <del> {price} NIS</del>
          </Badge>
          <div className="item-foot_desc">
            <span className="foot_desc-price">
              {price - (price * deals.value) / 100} NIS
            </span>
            <ButtonAddRemoveItem
              quantity={handleQuantity()}
              handleRemoveItem={() => cartRemoveItem(item)}
              handleAddItem={() => cartAddItem(item)}
            />
          </div>
        </div>
      ) : (
        <div className="item-foot_desc">
          <span className="foot_desc-price">{price} NIS</span>
          <ButtonAddRemoveItem
            quantity={handleQuantity()}
            handleRemoveItem={() => cartRemoveItem(item)}
            handleAddItem={() => cartAddItem(item)}
          />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
