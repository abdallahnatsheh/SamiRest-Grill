import React, { useState, useContext } from "react";
import { Button, Card, Modal, Badge, Form } from "react-bootstrap";
import shopContext from "../../../../context/shop-context";
import ButtonAddRemoveItem from "../../../ButtonAddRemoveItem";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./style.css";

//this modal shows meal addons and types with  dynamic price calculation (need to be fixed in better way in future)

const ShowItemModal = React.memo(function ShowItemModal({
  props,
  onHide,
  item,
  showit,
}) {
  const { img, name, price, info, deals } = item;
  const context = useContext(shopContext);
  //have food addons prices to be used later
  const [foodTypeAddon, setFoodTypeAddon] = useState([]);
  //have radio form types
  const [foodTypeValue, setFoodTypeValue] = useState([]);
  // item quantity want to add to cart
  const [neededQuantitiy, setneededQuantitiy] = useState(1);
  //calculate final price
  const handleFinalPrice = (foodTypeAddon, foodTypeValue, neededQuantitiy) => {
    let TypeSum = 0;
    if (foodTypeAddon.length > 0) {
      foodTypeAddon.map((addon) =>
        item.price.addons.find((add, i) => {
          if (add.name === addon.name) {
            TypeSum += Number(add.value);
          }
        })
      );
    } else {
      TypeSum = 0;
    }
    let sum =
      (foodTypeValue.value ? foodTypeValue.value + TypeSum : 0 + TypeSum) *
      (neededQuantitiy + handleQuantity(item.id));
    let finalprice = deals.enabled ? sum - (sum * deals.value) / 100 : sum;
    return finalprice;
  };

  // Add/Remove checked checkbox item from list
  const handleCheck = (event) => {
    var updatedList = [...foodTypeAddon];
    if (!foodTypeAddon.find((o) => o.name === event.target.value)) {
      updatedList = [
        ...foodTypeAddon,
        { name: event.target.value, checked: event.target.checked },
      ];
    } else {
      updatedList = updatedList.filter(
        (item) => item.name !== event.target.value
      );
    }
    setFoodTypeAddon(updatedList);
  };
  const handleQuantity = (id) => {
    let quantity = 0;

    if (context.cart.length !== 0) {
      const foundItemInCart = context.cart.find((item) => item.id === id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };
  //create final order to be added to the cart
  const makeOrder = () => {
    let order = {
      ...item,
      quantity: neededQuantitiy,
      types: foodTypeValue,
      addons: foodTypeAddon,
      totalPrice: handleFinalPrice(
        foodTypeAddon,
        foodTypeValue,
        neededQuantitiy
      ),
    };
    return order;
  };
  return (
    <Modal
      {...props}
      contentClassName="meal-modal"
      scrollable
      centered
      onExited={function (e) {
        setFoodTypeValue([]);
        setFoodTypeAddon([]);
        setneededQuantitiy(0);
      }}
      show={showit}
    >
      <Modal.Header onClick={onHide}>
        <AiOutlineCloseCircle
          onClick={onHide}
          style={{ height: "30px", width: "32px" }}
        ></AiOutlineCloseCircle>{" "}
      </Modal.Header>{" "}
      <Modal.Body id={item.id}>
        <Card className="item-modal" border="light">
          <Card.Img className="card-meal-image" variant="top" src={img} />
          <Card.Body>
            <Card.Text className="meal-modal-text">
              <Badge bg="warning">
                {deals.enabled ? deals.value + "%" : ""}
              </Badge>{" "}
              {name}
            </Card.Text>
            <Card.Text>{info}</Card.Text>
            <Form dir="rtl" id="type-form">
              {!price.defaultPrice.enabled ? (
                <div className="mb-3" dir="rtl">
                  <span style={{ color: "black" }}>إختر نوعية الوجبة :</span>
                  {Object.keys(price.types).map((type) => (
                    <Form.Check
                      key={type}
                      name="type-radio"
                      label={
                        price.types[type].name +
                        " ₪" +
                        price.types[type].value +
                        " "
                      }
                      value={price.types[type].value}
                      id={type}
                      onChange={() => setFoodTypeValue(price.types[type])}
                      type="radio"
                      dir="rtl"
                      style={{ margin: "10px" }}
                    />
                  ))}
                </div>
              ) : (
                <Form.Check
                  key={item.id}
                  label={name + " ₪" + price.defaultPrice.value + " "}
                  value={price.defaultPrice.value}
                  id={item.id}
                  onChange={() =>
                    setFoodTypeValue({
                      name: name,
                      value: price.defaultPrice.value,
                    })
                  }
                  type="radio"
                  dir="rtl"
                  style={{ margin: "10px" }}
                />
              )}
              {Object.keys(price.addons).length > 0 ? (
                <div className="mb-3" dir="rtl">
                  <span style={{ color: "black" }}>إختر الاضافة للوجبة :</span>
                  {Object.keys(price.addons).map((type) => (
                    <Form.Check
                      key={type}
                      label={
                        price.addons[type].name +
                        " ₪" +
                        price.addons[type].value +
                        " "
                      }
                      value={price.addons[type].name}
                      id={type}
                      onChange={handleCheck}
                      type="checkbox"
                      dir="rtl"
                      style={{ margin: "10px" }}
                    />
                  ))}
                </div>
              ) : (
                ""
              )}
            </Form>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        {handleQuantity(item.id) <= 0 ? (
          ""
        ) : (
          <Button variant="primary">
            <Badge bg="secondary">{handleQuantity(item.id)}</Badge> :في السلة
          </Button>
        )}
        <ButtonAddRemoveItem
          neededQuantitiy={neededQuantitiy}
          handleAdd={() => setneededQuantitiy(neededQuantitiy + 1)}
          handleRemove={() => setneededQuantitiy(neededQuantitiy - 1)}
        />
        <Button onClick={context.addProductToCart.bind(this, makeOrder())}>
          {handleFinalPrice(foodTypeAddon, foodTypeValue, neededQuantitiy) !== 0
            ? "₪" +
              handleFinalPrice(foodTypeAddon, foodTypeValue, neededQuantitiy) +
              "  سعر كامل"
            : "إختر وجبتك"}
        </Button>
        <Button
          disabled={handleQuantity(item.id) < 1}
          onClick={context.removeProductFromCart.bind(this, item)}
        >
          حذف من السلة
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default ShowItemModal;
