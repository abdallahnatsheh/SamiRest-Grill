import React from "react";
import { Spinner } from "react-bootstrap";
import shopContext from "../../context/shop-context";
import Footer from "../MainPage/Footer";
import Header from "../MainPage/Header";
import Menu from "../Menu";

/*
main menu page component that pass menu data as prop for menu component
 */
const MenuPage = React.memo(function MenuPage() {
  return (
    <shopContext.Consumer>
      {(context) => (
        <div>
          <Header />
          {context.products.length !== 0 ? (
            <Menu list={context.products} />
          ) : (
            <Spinner />
          )}
          <Footer />
        </div>
      )}
    </shopContext.Consumer>
  );
});

export default MenuPage;
