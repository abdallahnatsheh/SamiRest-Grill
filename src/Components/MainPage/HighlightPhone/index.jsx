import React from "react";
import { Image,Badge,Button, Col, Container, Row } from "react-bootstrap";
import "./highlightphone.css"

const mainStyle = {
    background: "rgb(210,141,8)",
};
const btnStyle = {
    background: "#790a0a",
}
const imageStyle ={
    marginLeft: "-100px",
    marginTop: "-20px",
    marginBottom: "-230px",
    height:" 525.513px",
}


const HighlightPhone= () => (

<section className="highlight-phone" style={mainStyle}>
    <Container>
    <Row>
            <Col>
                <h2>
                    <br/>
                    <strong>
                         All-in-One App <Badge bg="dark">SOON</Badge>
                    </strong>
                    <br/>
                </h2>
                <p> Hungry? Happiness is just a tap away, experience The best in your area delivered to your doorstep.No street address? No problem!Our drivers are on their way.</p><br />
                <Button style={btnStyle} href="https://play.google.com/store/apps" target="_blank">Download now!</Button><br/>
            </Col>
            <Col>
            <Image src = './assets/img/logo-content-phone-new_pixel_quite_black_portrait.png' style={imageStyle}/>                                
            </Col>
        </Row>
    </Container>

</section>

);

export default HighlightPhone;