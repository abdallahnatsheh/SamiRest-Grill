import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './testimonials.css'

const headingStyle = {
    color: "#d28d08",
    fontSize: "44.128px",
}



const Testimonials =() => (
    <section className="testimonials-clean" style={{background: "rgb(0,0,0)"}}>
        <Container>
            <div className="intro" style = {{margin: "0 auto 40px"}}>
                <h2 className="text-center"style={headingStyle}>Testimonials</h2>
                <p className="text-center">Our customers love us! Read what they have to say below. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
            </div>
            <Row className="row people">
                <Col className="col-md-6 col-lg-4 item">
                    <div className="box" style={{background: "#790a0a"}}>
                        <p className="description" style={{color: "rgb(255,255,255)"}}>Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                    </div>
                    <div className="author">
                        <img className="rounded-circle" src='./assets/img/1.jpg' alt="pic" />
                        <h5 className="name" style={{color: "rgb(255,255,255)"}}>Ben Johnson</h5>
                        <p className="title">CEO of Company Inc.</p>
                    </div>
                </Col>
                <Col className="col-md-6 col-lg-4 item">
                    <div className="box" style={{background: "#790a0a"}}>
                        <p className="description" style={{color: "rgb(255,255,255)"}}>Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                    </div>
                    <div className="author">
                        <img className="rounded-circle" src='./assets/img/1.jpg' alt="pic" />
                        <h5 className="name" style={{color: "rgb(255,255,255)"}}>Ben Johnson</h5>
                        <p className="title">CEO of Company Inc.</p>
                    </div>
                </Col>
                <Col className="col-md-6 col-lg-4 item">
                    <div className="box" style={{background: "#790a0a"}}>
                        <p className="description" style={{color: "rgb(255,255,255)"}}>Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                    </div>
                    <div className="author">
                        <img className="rounded-circle" src='./assets/img/1.jpg' alt="pic" />
                        <h5 className="name" style={{color: "rgb(255,255,255)"}}>Ben Johnson</h5>
                        <p className="title">CEO of Company Inc.</p>
                    </div>
                </Col>    
            </Row>
        </Container>
    </section>
    );

export default Testimonials;