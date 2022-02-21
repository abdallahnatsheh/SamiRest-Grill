import React from "react";
import { Button } from "react-bootstrap";
import "./styles.css";

const ButtonAddRemoveItem = ({ handleAdd, handleRemove, neededQuantitiy }) => {
  return (
    <div className="btnAddRemove pull-left">
      <div className="btnAddRemove-positive">
        <Button
          disabled={neededQuantitiy <= 1}
          className="fa fa-minus"
          aria-hidden="true"
          onClick={handleRemove}
        ></Button>
        <span> {neededQuantitiy}</span>
        <Button
          className="fa fa-plus"
          aria-hidden="true"
          onClick={handleAdd}
        ></Button>
      </div>
    </div>
  );
};

export default ButtonAddRemoveItem;
