import React from "react";
import Header from "../MainPage/Header";

const style = {
  background: "white",
};
const NotFound = () => (
  <div className="NotFound-Page">
    <Header />
    <h1 id="pagenotfound" style={style}>
      <strong>NOT FOUND 404</strong>
    </h1>
  </div>
);
export default NotFound;
