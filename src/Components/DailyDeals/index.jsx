import React, { useRef } from "react";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import DDMenu from "../DailyDeals/DDMenu";
import { menuItemsData } from "../Menu/data";
/*
daily deals now looks the same as menu but will be edited to match the deals daily deals only (need to be fixed )
*/
const DailyDeals = () => {
  const menuDailyRef = useRef();
  //      <DDMenu list={menuItemsData} ref={menuDailyRef} />

  return (
    <div className="deals-page">
      <Header />
      <div style={{ color: "white" }}>Under Construction</div>
      <Footer />
    </div>
  );
};

export default DailyDeals;
