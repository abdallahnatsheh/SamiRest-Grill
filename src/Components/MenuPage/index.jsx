import React, { useRef } from "react";
import ButtonCartCount from "../ButtonAddRemoveItem";
import Footer from "../MainPage/Footer";
import Header from "../MainPage/Header";
import Menu from "../Menu";
import { menuItemsData } from "../Menu/data";
/*
main menu page component that pass menu data as prop for menu component
 */
const MenuPage = () => {
  const menuRef = useRef();
  return (
    <div>
      <Header />
      <Menu list={menuItemsData} ref={menuRef} />
      <Footer />
      <ButtonCartCount />
    </div>
  );
};

export default MenuPage;
