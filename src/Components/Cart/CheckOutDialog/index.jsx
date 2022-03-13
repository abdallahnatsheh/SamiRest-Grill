import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import shopContext from "../../../context/shop-context";
import Order from "./Order";

export default function ResponsiveDialog() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const checkBtnStyle = {
    background: "rgb(210,141,8)",
    color: "rgb(0,0,0)",
    borderWidth: "0px",
    borderColor: "rgb(210,141,8)",
    padding: "20px",
    textAlign: "right",
    borderTop: " 2px solid #000",
    marginLeft: "auto",
    marginTop: "0.5rem",
    alignItems: "right",
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const context = useContext(shopContext);
  let cartTotal = 0;
  context.cart.map((item) => (cartTotal += item.totalPrice));
  return (
    <div>
      <Button
        className=" orders-total btn btn-primary border rounded-pill d-block btn-user"
        type="checkout"
        style={checkBtnStyle}
        onClick={handleClickOpen}
      >
        NIS {cartTotal} المجموع الكلي
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Order orders={context.cart} handleClose={handleClose} />
      </Dialog>
    </div>
  );
}
