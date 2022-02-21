import React from "react";
import MenuItem from "./MenuItem";
import "./styles.css";

/*
menu items component used to print the menu items by passing the item and its id as the kay for future use
*/

const Menu = (props) => {
  return <MenuItem list={props.list} />;
};

export default Menu;
