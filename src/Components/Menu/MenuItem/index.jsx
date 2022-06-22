import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";

import ShowItemModal from "./ShowItemModal";
import "./styles.css";
import shopContext from "../../../context/shop-context";
import axios from "axios";
/**
 * this component build item menu after recieving it from firestore
 */

const MenuItem = ({ list }) => {
  //takes the time of israel to check for daily deals
  const [today, setToday] = useState();
  React.useEffect(() => {
    function getCurrentTime() {
      axios
        .get(`http://worldtimeapi.org/api/timezone/Asia/Jerusalem`)
        .then((res) => {
          setToday(JSON.stringify(res.data.datetime).slice(1, -1));
        });
    }
    getCurrentTime();
  }, []);
  //submit the chosen item to be shown in the modal dialog
  function showItem(item) {
    setFood(item);
    setshowItemModal(true);
  }
  //initial values for the food that will be chosen
  const [food, setFood] = useState({
    id: 0,
    name: "",
    info: "",
    catagure: "",
    price: {
      defaultPrice: {
        enabled: false,
        value: 0,
      },
      types: {
        1: { name: "", value: 0 },
      },
      addons: {
        1: { name: "", value: 0 },
      },
    },
    img: "",
    deals: {
      enabled: true,
      value: 0,
    },
  });
  //this handle show mode of modal dialog
  const [showItemModal, setshowItemModal] = useState(false);
  //list all the meals with their deals and also checks if the daily deal still active
  //before listing the meal
  return (
    <shopContext.Consumer>
      {(context) => (
        <main>
          <ShowItemModal
            showit={showItemModal}
            onHide={() => setshowItemModal(false)}
            item={food}
          />

          {list.map((item) => (
            <div
              className="item menuItems"
              key={item.id}
              onClick={() => showItem(item)}
            >
              <img id="menuImages" src={item.img} alt="food" />
              <div className="item-head_desc">
                <p className="head_desc-name" style={{ textAlign: "center" }}>
                  {item.name}
                </p>
              </div>
              {item.deals.enabled && !item.deals.dailyDealEnable ? (
                <div>
                  <Badge
                    pill
                    bg="warning"
                    text="dark"
                    className="item-food-discount "
                  >
                    <span> -%{item.deals.value} :خصم</span>
                  </Badge>
                  <div className="item-foot_desc">
                    <del> {item.price.defaultPrice.value} ₪</del>
                    <span className="foot_desc-price">
                      {item.price.defaultPrice.value -
                        (item.price.defaultPrice.value * item.deals.value) /
                          100}{" "}
                      ₪
                    </span>
                  </div>
                </div>
              ) : item.deals.dailyDealEnable &&
                item.deals.enabled &&
                today >= new Date(item.deals.fromDate.seconds * 1000) &&
                today < new Date(item.deals.toDate.seconds * 1000) ? (
                <div>
                  <Badge
                    pill
                    bg="light"
                    text="dark"
                    className="item-food-discount "
                  >
                    <span> -%{item.deals.value} : العرض اليومي </span>
                  </Badge>
                  <div className="item-foot_desc">
                    <del> {item.price.defaultPrice.value} ₪</del>
                    <span className="foot_desc-price">
                      {item.price.defaultPrice.value -
                        (item.price.defaultPrice.value * item.deals.value) /
                          100}{" "}
                      ₪
                    </span>
                  </div>
                </div>
              ) : (
                <div className="item-foot_desc">
                  <span className="foot_desc-price">
                    {item.price.defaultPrice.value} ₪
                  </span>
                </div>
              )}
            </div>
          ))}
        </main>
      )}
    </shopContext.Consumer>
  );
};

export default MenuItem;
