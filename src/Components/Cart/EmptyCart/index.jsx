import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
//this component shows empty cart
const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="emptyCart">
      <img src="./assets/img/emptycart.png" alt="" />
      <button onClick={() => navigate("/menu")}>
        <i className="fas fa-long-arrow-alt-left"></i> اطلب الاّن
      </button>
      <br></br>
    </div>
  );
};

export default EmptyCart;
