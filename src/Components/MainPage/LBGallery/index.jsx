import React from "react";
import {Container} from "react-bootstrap";
import './lbgallery.css'

const LBGallery =() => (
    <section className="photo-gallery" style={{background:"#790a0a"}}>
    <Container className="container">
        <div className="intro">
            <h2 className="text-center" style={{color: "#d28d08"}}>Gallery</h2>
            <p className="text-center" style={{color: "rgb(255,255,255)"}}>Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
        </div>
        <div className="row photos" data-bss-baguettebox>
            <div className="col-sm-6 col-md-4 col-lg-3 item">
                <a href='./assets/img/food1.jpg'>
                    <img className="img-fluid" src='./assets/img/food1.jpg' alt=""/></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 item">
                <a href='./assets/img/food1.jpg'>
                    <img className="img-fluid" src='./assets/img/food1.jpg' alt=""/></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 item">
                <a href='./assets/img/food1.jpg'>
                    <img className="img-fluid" src='./assets/img/food1.jpg' alt=""/></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 item">
                <a href='./assets/img/food1.jpg'>
                    <img className="img-fluid" src='./assets/img/food1.jpg' alt=""/></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 item">
                <a href='./assets/img/food1.jpg'>
                    <img className="img-fluid" src='./assets/img/food1.jpg' alt=""/></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 item">
                <a href='./assets/img/food1.jpg'>
                    <img className="img-fluid" src='./assets/img/food1.jpg' alt=""/></a>
            </div>
        </div>
    </Container>
    </section>
    );

export default LBGallery;