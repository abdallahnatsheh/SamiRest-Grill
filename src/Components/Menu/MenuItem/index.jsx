import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";

import ShowItemModal from "./ShowItemModal";
import "./styles.css";
import shopContext from "../../../context/shop-context";
/**
 * this component build item menu after recieving it from firestore
 */

const MenuItem = ({ list }) => {
  function showItem(item) {
    setFood(item);
    setshowItemModal(true);
  }
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
  const [showItemModal, setshowItemModal] = useState(false);
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
              {item.deals.enabled ? (
                <div>
                  <Badge
                    pill
                    bg="warning"
                    text="dark"
                    className="item-food-discount "
                  >
                    <small> %{item.deals.value} :خصم</small>
                    <br />
                    <del> {item.price.defaultPrice.value} NIS</del>
                  </Badge>
                  <div className="item-foot_desc">
                    <span className="foot_desc-price">
                      {item.price.defaultPrice.value -
                        (item.price.defaultPrice.value * item.deals.value) /
                          100}{" "}
                      NIS
                    </span>
                  </div>
                </div>
              ) : (
                <div className="item-foot_desc">
                  <span className="foot_desc-price">
                    {item.price.defaultPrice.value} NIS
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
