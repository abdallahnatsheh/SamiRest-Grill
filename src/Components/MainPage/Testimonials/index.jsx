import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./testimonials.css";

const headingStyle = {
  color: "#d28d08",
  fontSize: "44.128px",
};
/*
testamonial page component 
*/
const Testimonials = () => (
  <section className="testimonials-clean" style={{ background: "rgb(0,0,0)" }}>
    <Container>
      <div className="intro" style={{ margin: "0 auto 40px" }}>
        <h2 className="text-center" style={headingStyle}>
          آراء زبائننا
        </h2>
        <p className="text-center">عملاؤنا يحبوننا! اقرأ ما سيقولونه أدناه. </p>
      </div>
      <Row className="row people">
        <Col className="col-md-6 col-lg-4 item">
          <div className="box" style={{ background: "#790a0a" }}>
            <p className="description" style={{ color: "rgb(255,255,255)" }}>
              !! افضل مطعم في القدس مع خدمة توصيل سريعة
            </p>
          </div>
          <div className="author">
            <img
              className="rounded-circle"
              src="./assets/img/1.jpg"
              alt="pic"
            />
            <h5 className="name" style={{ color: "rgb(255,255,255)" }}>
              محمد احمد
            </h5>
            <p className="title">.مهندس معماري</p>
          </div>
        </Col>
        <Col className="col-md-6 col-lg-4 item">
          <div className="box" style={{ background: "#790a0a" }}>
            <p className="description" style={{ color: "rgb(255,255,255)" }}>
              😍😍 فخر مطاعم بيت المقدس واجمل ما فيه خدماته لدعم الاكل الصحي
            </p>
          </div>
          <div className="author">
            <img
              className="rounded-circle"
              src="./assets/img/1.jpg"
              alt="pic"
            />
            <h5 className="name" style={{ color: "rgb(255,255,255)" }}>
              محمود عيسى
            </h5>
            <p className="title">دكتور تغذية</p>
          </div>
        </Col>
        <Col className="col-md-6 col-lg-4 item">
          <div className="box" style={{ background: "#790a0a" }}>
            <p className="description" style={{ color: "rgb(255,255,255)" }}>
              😋 ازكى كباب وازكى شاورما , وحش ابو السامي كلك ذوق
            </p>
          </div>
          <div className="author">
            <img
              className="rounded-circle"
              src="./assets/img/1.jpg"
              alt="pic"
            />
            <h5 className="name" style={{ color: "rgb(255,255,255)" }}>
              سعيد صبحي
            </h5>
            <p className="title">لاعب كمال اجسام</p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Testimonials;
