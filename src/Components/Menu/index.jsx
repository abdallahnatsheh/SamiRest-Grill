import React, { forwardRef } from "react";
import MenuItem from "./MenuItem";
import "./styles.css";
/*
menu items component used to print the menu items by passing the item and its id as the kay for future use
*/
const Menu = forwardRef(({ list }, ref) => (
  <main ref={ref}>
    {list.map((item) => (
      <MenuItem item={item} key={item.id} />
    ))}
  </main>
));

export default Menu;
