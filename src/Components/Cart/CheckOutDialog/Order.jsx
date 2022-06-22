import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useAuth } from "../../../context/AuthContext";
import { db } from "../../firebase/firebase.Config";
import { addDoc, collection } from "firebase/firestore";
import { NotificationManager } from "react-notifications";
import { useContext } from "react";
import shopContext from "../../../context/shop-context";
import { useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
//this is the checkout dialog popup that displays the meals in cart in detail
//and handle the checkout for every customer (for now without payment gateway)
const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  background-color: white;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
`;
const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;

const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 50%;
  display: flex;
  justify-content: center;
`;
const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
  direction: rtl;
  ${({ editable }) =>
    editable
      ? `
    &:hover {
      cursor: pointer;
      background-color: #e7e7e7;
    }
  `
      : `
    pointer-events: none; 
  `}
`;

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
`;

const Order = ({ orders, handleClose }) => {
  const context = useContext(shopContext);
  const navigate = useNavigate();
  let cartTotal = 0;
  orders.map((item) => (cartTotal += item.totalPrice));
  const [notes, setNotes] = useState("");
  const [orderType, setOrderType] = useState("");
  const isValid =
    notes.trim().length >= 0 &&
    notes.trim().length < 500 &&
    orderType.length > 0;
  const { currentUser, dataUser } = useAuth();
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
  function getTime() {
    var todays = String(today).slice(11, 19);
    console.log(todays);
    return todays;
  }
  function getDate() {
    var todays = String(today).slice(0, 10);
    return todays;
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const orderResult = collection(db, "orders");
    addDoc(orderResult, {
      orders: orders,
      notes: notes,
      cartTotal: cartTotal,
      dataUser: {
        firstName: dataUser.firstName,
        lastName: dataUser.lastName,
        firstAddress: dataUser.firstAddress,
        secondAddress: dataUser.secondAddress,
        phoneNumber: dataUser.phoneNumber,
        email: dataUser.email,
        uid: dataUser.uid,
      },
      status: "وضع الانتظار",
      orderTime: getTime(),
      orderDate: getDate(),
      orderType: orderType,
    })
      .then(function () {
        context.emptyCart();
        NotificationManager.success(" تم الطلب بنجاح ", "نجح");
        navigate("/menu");
      })
      .catch(function () {
        NotificationManager.warning("خطأ في الخدمة", "خطأ", 1000);
      });
  };
  const handleppSubmit = async () => {
    const orderResult = collection(db, "orders");
    addDoc(orderResult, {
      orders: orders,
      notes: notes,
      cartTotal: cartTotal,
      dataUser: {
        firstName: dataUser.firstName,
        lastName: dataUser.lastName,
        firstAddress: dataUser.firstAddress,
        secondAddress: dataUser.secondAddress,
        phoneNumber: dataUser.phoneNumber,
        email: dataUser.email,
        uid: dataUser.uid,
      },
      status: "وضع الانتظار",
      orderTime: getTime(),
      orderDate: getDate(),
      orderType: orderType,
    })
      .then(function () {
        context.emptyCart();
        NotificationManager.success(" تم الطلب بنجاح ", "نجح");
        navigate("/menu");
      })
      .catch(function () {
        NotificationManager.warning("خطأ في الخدمة", "خطأ", 1000);
      });
  };
  return (
    <Form style={{ direction: "rtl" }} onSubmit={handleSubmit}>
      <OrderStyled>
        <AiOutlineCloseCircle
          onClick={handleClose}
          style={{ height: "30px", width: "32px" }}
        ></AiOutlineCloseCircle>
        <OrderContent>
          <OrderContainer>
            طلبك: {getDate()} / {getTime()}
          </OrderContainer>
          {orders.map((order) => (
            <OrderContainer key={order.id} editable>
              <OrderItem>
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div>{order.totalPrice}₪</div>
              </OrderItem>
              <DetailItem>
                {order.addons.map((order) => order.name).join(", ")}
              </DetailItem>
              {order.types.name && <DetailItem>{order.types.name}</DetailItem>}
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div />
              <div>المبلغ النهائي</div>
              <div>{cartTotal}₪</div>
            </OrderItem>
          </OrderContainer>
          <OrderContainer>
            <div> نوع الطلبية</div>
          </OrderContainer>
          <Form.Check
            name="type-radio"
            label="حجز"
            value="reserve"
            onChange={(e) => setOrderType(e.target.value)}
            type="radio"
            dir="rtl"
            style={{ margin: "10px" }}
          />
          <Form.Check
            name="type-radio"
            label="توصيل"
            value="deliver"
            onChange={(e) => setOrderType(e.target.value)}
            type="radio"
            dir="rtl"
            style={{ margin: "10px" }}
          />
          <OrderContainer>
            <div> ملاحظات قبل الطلب</div>
          </OrderContainer>
          <Form.Control
            as="textarea"
            rows={3}
            max="5"
            type="text"
            onChange={(event) => setNotes(event.target.value)}
          />
        </OrderContent>
        <DialogFooter style={{ overflowY: "scroll" }}>
          {!currentUser ? (
            <Button style={{ width: "100%" }} variant="warning" href="/login">
              سجل دخولك اولاً
            </Button>
          ) : (
            <div style={{ padding: 20 }}>
              <Button
                style={{ width: "100%" }}
                variant="warning"
                disabled={!isValid}
                type="submit"
              >
                الدفع نقدا (كاش)
              </Button>
              <br></br> <br></br>
              {isValid && (
                <PayPalScriptProvider
                  style={{ padding: 20 }}
                  options={{
                    "client-id":
                      "Adt2tyKxwvbs_rPLoTatiSuU_OTegVmrQitcifPxCXPZe-Q12wH4702af1REpMgRLiXFmnYjKPVEBFhT",
                    currency: "ILS",
                  }}
                >
                  <PayPalButtons
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: cartTotal,
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then(() => {
                        handleppSubmit();
                      });
                    }}
                  />
                </PayPalScriptProvider>
              )}
            </div>
          )}
        </DialogFooter>
      </OrderStyled>
    </Form>
  );
};
export default Order;
