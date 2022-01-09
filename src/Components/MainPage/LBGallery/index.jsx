import React from "react";
import { Container } from "react-bootstrap";
import "./lbgallery.css";
/*
gallery component that the admin will be able to change it from his admin apnel
*/
const LBGallery = () => (
  <section className="photo-gallery" style={{ background: "#790a0a" }}>
    <Container className="container">
      <div className="intro">
        <h2 className="text-center" style={{ color: "#d28d08" }}>
          معرض الصور
        </h2>
        <p className="text-center" style={{ color: "rgb(255,255,255)" }}>
          😍هنا يمكنك رؤية كل ما هو مميز ولذيذ في مطعمنا 😍{" "}
        </p>
      </div>
      <div className="row photos" data-bss-baguettebox>
        <div className="col-sm-6 col-md-4 col-lg-3 item">
          <a href="./assets/img/food1.jpg">
            <img className="img-fluid" src="./assets/img/food1.jpg" alt="" />
          </a>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 item">
          <a href="./assets/img/food1.jpg">
            <img className="img-fluid" src="./assets/img/food2.jpg" alt="" />
          </a>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 item">
          <a href="./assets/img/food1.jpg">
            <img className="img-fluid" src="./assets/img/food3.jpg" alt="" />
          </a>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 item">
          <a href="./assets/img/food1.jpg">
            <img className="img-fluid" src="./assets/img/food4.jpg" alt="" />
          </a>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 item">
          <a href="./assets/img/food1.jpg">
            <img className="img-fluid" src="./assets/img/food7.jpg" alt="" />
          </a>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 item">
          <a href="./assets/img/food1.jpg">
            <img className="img-fluid" src="./assets/img/food6.jpg" alt="" />
          </a>
        </div>
      </div>
    </Container>
  </section>
);

export default LBGallery;
