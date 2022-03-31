import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import ShowItemModal from "../../Menu/MenuItem/ShowItemModal";
import shopContext from "../../../context/shop-context";
import "../../Menu/MenuItem/styles.css";
/*
this component handle showing all the meals that have active daily deals
and checks if the deal still active or not 
*/
const DDMenu = ({ list }) => {
  const today = new Date(
    Date("he-IL", {
      timeZone: "Asia/Jerusalem",
    })
  );
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

          {list.map((item) =>
            item.deals.enabled &&
            item.deals.dailyDealEnable &&
            today >= new Date(item.deals.fromDate.seconds * 1000) &&
            today < new Date(item.deals.toDate.seconds * 1000) ? (
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

                <div>
                  <Badge
                    pill
                    bg="light"
                    text="dark"
                    className="item-food-discount "
                  >
                    <small> %{item.deals.value} : العرض اليومي</small>
                    <br /> <br />
                    <del> {item.price.defaultPrice.value} ₪</del>
                  </Badge>
                  <div className="item-foot_desc">
                    <span className="foot_desc-price">
                      {item.price.defaultPrice.value -
                        (item.price.defaultPrice.value * item.deals.value) /
                          100}{" "}
                      ₪
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </main>
      )}
    </shopContext.Consumer>
  );
};

export default DDMenu;
