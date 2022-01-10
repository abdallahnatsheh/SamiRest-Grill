import React, { forwardRef } from "react";
import MenuItem from "../../Menu/MenuItem";
import "./styles.css";
/*
menu items component used to print the menu items by passing the item and its id as the kay for future use
*/
const DDMenu = forwardRef(({ list }, ref) => (
  <main ref={ref}>
    {list.map((item) =>
      item.deals.enabled ? <MenuItem item={item} key={item.id} /> : null
    )}
  </main>
));

export default DDMenu;
