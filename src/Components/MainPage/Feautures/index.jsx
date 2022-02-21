import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./feautures.css";
import { BsFillPinMapFill, BsClockFill, BsTelephoneFill } from "react-icons/bs";

const mainStyle = {
  width: "100%",
  height: "100%",
  background: "rgb(0,0,0)",
  placeItems: "center",
  padding: "20px",
};
const iconStyle = {
  color: " rgb(210,141,8)",
  width: "10%",
  height: "10%",
  paddingTop: "10px",
  margin: "5px",
};
const Feautures = React.memo(function Feautures() {
  return (
    <section className="features-boxed" style={mainStyle}>
      <Container>
        <div className="intro">
          <h2 className="text-center">مميزات المطعم </h2>
          <p className="text-center">اهم ما يميز مطعمنا الفاخر</p>
        </div>
        <Row className="justify-content-center features">
          <Col sm={6} md={5} lg={4} className="item">
            <div className="box">
              <BsFillPinMapFill style={iconStyle} />
              <br />
              <br />
              <h3 className="name">يعمل في القدس</h3>
              <p className="description">
                {" "}
                من افخر المطاعم المقدسية وافضلها خدمة , جبل المكبر - حي الصلعة
              </p>
            </div>
          </Col>
          <Col sm={6} md={5} lg={4} className="item">
            <div className="box">
              <BsClockFill style={iconStyle} />
              <br />
              <br />
              <h3 className="name">موجود دائما</h3>
              <p className="description">
                {" "}
                نحن دائما في خدمتكم وفي اسرع وقت ممكن من الساعة الثامنة صباحا
                حتى الثامنة مسائا
              </p>
            </div>
          </Col>
          <Col sm={6} md={5} lg={4} className="item">
            <div className="box">
              <BsTelephoneFill style={iconStyle} />
              <br />
              <br />
              <h3 className="name">سهولة في الطلب</h3>
              <p className="description">
                تنميز بسهولة وصول الزبائن لها وسهولة التوصية حسب الطلب
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
});

export default Feautures;
