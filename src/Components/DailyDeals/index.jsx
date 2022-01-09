import React, { useRef } from "react";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import Menu from "../Menu";
import { menuItemsData } from "../Menu/data";
/*
daily deals now looks the same as menu but will be edited to match the deals daily deals only
*/
const DailyDeals = () => {
  const menuRef = useRef();
  return (
    <div className="deals-page">
      <Header />
      <Menu list={menuItemsData} ref={menuRef} />
      <Footer />
    </div>
  );
};

export default DailyDeals;
