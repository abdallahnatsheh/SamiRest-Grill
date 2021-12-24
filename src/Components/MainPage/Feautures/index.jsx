import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './feautures.css'
import { BsFillPinMapFill,BsClockFill,BsTelephoneFill } from "react-icons/bs";

const mainStyle ={
    width: "100%",
    height:"100%",
    background: "rgb(0,0,0)",
    placeItems: "center",     
    padding : "20px"

}
const iconStyle = {
    color:" rgb(210,141,8)",
    width:"10%",
    height:"10%",
    paddingTop : "10px",
    margin:"5px"
}
const Feautures =() => (
<section className="features-boxed" style={mainStyle}>

<Container>
        <div className="intro">
            <h2 className="text-center">Features </h2>
            <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>        
        </div>
            <Row className="justify-content-center features">
                <Col sm={6} md={5} lg={4} className="item">
                <div className="box">
                    <BsFillPinMapFill  style={iconStyle}/><br/><br/>
                    <h3 className="name">WORKS IN JERUSALEM</h3>
                    <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p>
                </div>
                </Col>
                <Col sm={6} md={5} lg={4} className="item">
                <div className="box">
                    <BsClockFill style={iconStyle}/><br/>
                    <br/><h3 className="name">ALWAYS AVAILABLE</h3>
                    <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p>
                </div>
                </Col>
                <Col sm={6} md={5} lg={4} className="item">
                <div className="box">
                    <BsTelephoneFill style={iconStyle}/><br/>
                    <br/><h3 className="name" >EASY TO ORDER</h3>
                    <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p>
                </div>
                </Col>
            </Row>
</Container>
</section>
);

export default Feautures;