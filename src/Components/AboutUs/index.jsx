import React from "react";
import Header from "../MainPage/Header";
import Footer from "../MainPage/Footer";
import "./aboutus.css";
import { Container, Button } from "react-bootstrap";
import Testimonials from "../MainPage/Testimonials";
import TeamGrid from "./TeamGrid";

const parastyle = {
  color: "rgb(255, 255, 255)",
  padding: "25px",
};
const headStyle = {
  fontSize: "30px",
  color: "rgb(255, 255, 255)",
};
//this component shows the restaurant information (may change in future)
const AboutUs = () => (
  <div className="about-page">
    <Header />
    <Container className="container" style={parastyle}>
      <h1 style={{ padding: "10px" }}>معلومات عآمّة حول المطعم</h1>
      <div className="row" style={{ padding: "10px" }}>
        <div className="col-md-4">
          <div className="imgAbt">
            <img
              width="220"
              height="220"
              id="headimage"
              src="./assets/img/samipic.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-8" style={headStyle}>
          <p>
            العنوان: القدس – جبل المكبر – حيّ الصلعة 20
            <br />
            <br />
            هاتف أرضي: 026200870
            <br />
            <br />
            هاتف محمول: 0525509109
            <br />
            <Button
              type="button"
              href="https://www.facebook.com/samiRestgrill/"
              target="_blank"
              className="btn  rounded-pill"
            >
              FACEBOOK
            </Button>
            <> </>
            <Button
              type="button"
              href="https://wa.me/972525509109"
              target="_blank"
              variant="success"
              className="btn btn-green  rounded-pill"
            >
              WHATSAPP
            </Button>
          </p>
        </div>
      </div>
    </Container>

    <section className="map-clean">
      <iframe
        allowFullScreen
        frameBorder="0"
        title="restaurant location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3392.4200295404708!2d35.249026!3d31.759028!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150329d9df822af3%3A0x827f5746dabf1cf6!2z2YXYt9i52YUg2YjZhdi02KfZiNmKINiz2KfZhdmK!5e0!3m2!1sar!2sil!4v1640561686223!5m2!1sar!2sil"
        width="100%"
        height="450"
      ></iframe>
    </section>
    <Testimonials />
    <TeamGrid />
    <Footer />
  </div>
);

export default AboutUs;
