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
  height: 60px;
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
  const isValid = notes.trim().length >= 0 && notes.trim().length < 500;
  const { currentUser, dataUser } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    var today = new Date();

    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const orderResult = collection(db, "orders");
    addDoc(orderResult, {
      orders: orders,
      notes: notes,
      cartTotal: cartTotal,
      dataUser: dataUser,
      status: "وضع الانتظار",
      orderTime: time,
      orderDate: date,
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
          <OrderContainer> طلبك: </OrderContainer>
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
        <DialogFooter>
          {!currentUser ? (
            <Button style={{ width: "100%" }} variant="warning" href="/login">
              سجل دخولك اولاً
            </Button>
          ) : (
            <Button
              style={{ width: "100%" }}
              variant="warning"
              disabled={!isValid}
              type="submit"
            >
              الدفع
            </Button>
          )}
        </DialogFooter>
      </OrderStyled>
    </Form>
  );
};
export default Order;
