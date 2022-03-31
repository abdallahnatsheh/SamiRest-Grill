import React, { useRef } from "react";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import shopContext from "../../context/shop-context";
import DDMenu from "../DailyDeals/DDMenu";
import { menuItemsData } from "../Menu/data";
import { Spinner } from "react-bootstrap";
/*
daily deals menu shows only meals that have a daily deal 
*/
const DailyDeals = () => {
  return (
    <shopContext.Consumer>
      {(context) => (
        <div>
          <Header />
          {context.products.length !== 0 ? (
            <DDMenu list={context.products} />
          ) : (
            <Spinner />
          )}
          <div
            style={{ position: "fixed", left: "0", right: "0", bottom: "0" }}
          >
            <Footer />
          </div>
        </div>
      )}
    </shopContext.Consumer>
  );
};

export default DailyDeals;
