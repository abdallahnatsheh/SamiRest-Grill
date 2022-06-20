import React from "react";
import { Image, Badge, Button, Col, Container, Row } from "react-bootstrap";
import "./highlightphone.css";

const mainStyle = {
  background: "rgb(210,141,8)",
};
const btnStyle = {
  background: "#790a0a",
};
const imageStyle = {
  marginLeft: "-100px",
  marginTop: "-20px",
  marginBottom: "-230px",
  height: " 525.513px",
  width: "500px",
};
/*
this component shows that the resturant will have application on smart phones
*/
const HighlightPhone = React.memo(function HighlightPhone() {
  return (
    <section className="highlight-phone" style={mainStyle}>
      <Container>
        <Row>
          <Col>
            <h2>
              <br />
              <strong>تطبيق شامل لخدمات المطعم</strong>
              <br />
            </h2>
            <p>
              جوعان؟ السعادة على بعد نقرة واحدة ، جرب الأفضل في منطقتك حتى عتبة
              داركم. لا يوجد عنوان شارع؟ لا مشكلة! السائقين في طريقهم. مع
              امكانية متابعة طلباتكم بشكل حي على الخريطة
            </p>
            <br />
            <Button
              style={btnStyle}
              href="https://play.google.com/store/apps/details?id=com.abdallahna.samiResaurantapp"
              target="_blank"
            >
              ! حمله الاّن
            </Button>
            <br />
          </Col>
          <Col>
            <Image
              src="./assets/img/logo-content-phone-new_pixel_quite_black_portrait.png"
              style={imageStyle}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
});
export default HighlightPhone;
