import React from "react";
import { Container } from "react-bootstrap";
/*
team gril component will be changes according to the client (sami restaurant)
*/
const TeamGrid = () => (
  <section className="team-grid" style={{ background: "rgb(121,10,10)" }}>
    <Container>
      <div className="intro">
        <h2 className="text-center" style={{ color: "rgb(255,255,255)" }}>
          فريق العمل
        </h2>
        <p className="text-center" style={{ color: "rgb(235,236,237)" }}>
          {" "}
          😊 يسرنا ان تتعرفوا على فريق عملنا الرائع{" "}
        </p>
      </div>
      <div className="row people">
        <div className="col-md-4 col-lg-3 item">
          <div
            className="box"
            style={{ backgroundImage: "url('/assets/img/1.jpg')" }}
          >
            <div className="cover">
              <h3 className="name">سامر محمد</h3>
              <p className="title">الشيف</p>
              <div className="social">
                <a href="#">
                  <i className="fa fa-facebook-official"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3 item">
          <div
            className="box"
            style={{ backgroundImage: "url('/assets/img/1.jpg')" }}
          >
            <div className="cover">
              <h3 className="name">محمد خالد</h3>
              <p className="title">عامل الطلبات</p>
              <div className="social">
                <a href="#">
                  <i className="fa fa-facebook-official"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3 item">
          <div
            className="box"
            style={{ backgroundImage: "url('/assets/img/1.jpg')" }}
          >
            <div className="cover">
              <h3 className="name">عبدالرحمن طه</h3>
              <p className="title">عامل التوصيل</p>
              <div className="social">
                <a href="#">
                  <i className="fa fa-facebook-official"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3 item">
          <div
            className="box"
            style={{ backgroundImage: "url('/assets/img/1.jpg')" }}
          >
            <div className="cover">
              <h3 className="name">محمد حمادة</h3>
              <p className="title">مدير المطعم </p>
              <div className="social">
                <a href="#">
                  <i className="fa fa-facebook-official"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default TeamGrid;
