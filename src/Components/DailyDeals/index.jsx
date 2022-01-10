import React, { useRef } from "react";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import DDMenu from "../DailyDeals/DDMenu";
import { menuItemsData } from "../Menu/data";
/*
daily deals now looks the same as menu but will be edited to match the deals daily deals only
*/
const DailyDeals = () => {
  const menuDailyRef = useRef();
  return (
    <div className="deals-page">
      <Header />
      <DDMenu list={menuItemsData} ref={menuDailyRef} />
      <Footer />
    </div>
  );
};

export default DailyDeals;
