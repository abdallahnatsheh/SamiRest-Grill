import React from "react";
import "./footer.css";

const Footer = () => (
  <footer className="footer-basic" style={{ background: "#000000" }}>
    <div className="social">
      <a href="#">
        <i className="icon ion-social-instagram"></i>
      </a>
      <a href="#">
        <i className="icon ion-social-snapchat"></i>
      </a>
      <a href="#">
        <i className="icon ion-social-twitter"></i>
      </a>
      <a href="https://www.facebook.com/samiRestgrill/" target="_blank">
        <i className="icon ion-social-facebook"></i>
      </a>
    </div>
    <ul className="list-inline">
      <li className="list-inline-item">
        <a href="/">الصفحة الرئيسية</a>
      </li>
      <li className="list-inline-item">
        <a href="/support">الدعم الفني </a>
      </li>
      <li className="list-inline-item">
        <a href="/about-us">عن المطعم</a>
      </li>
      <li className="list-inline-item">
        <a href="/menu">قائمة الوجبات</a>
      </li>
      <li className="list-inline-item">
        <a href="#">سياسة الخصوصية</a>
      </li>
    </ul>
    <p className="copyright">Sami Restaurant And Grill © 2021</p>
  </footer>
);

export default Footer;
