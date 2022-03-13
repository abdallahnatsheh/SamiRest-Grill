import React from "react";
import { render } from "react-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

/*
here i use react redux store provider for the cart and for the menu
presist gate used to load the menu from the server and delay rendering until in recieved
browser router used as url router to browse the website 
*/
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
