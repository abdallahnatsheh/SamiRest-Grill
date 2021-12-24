import React from "react";
import {Container} from "react-bootstrap";
import './lmcards.css'

const containerStyle={
    background: "#d28d08",
    height:"100%",
    width: "100%"
}
const headingStyle = {
    fontWeight: "bold",
    marginBottom: "40px",
    paddingTop: "40px",
    color: "#000000"
}


const LMCard =() => (
    <Container style={containerStyle} fluid>
        <div className="intro" style = {{margin: "0 auto 40px"}}>
            <h2 className="text-center" style={headingStyle}>Latest Meals</h2>
            <p className="text-center" style={{color: "rgb(255,255,255)"}}>Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
        </div>
        <div className="main">
            <ul className="cards">
                <li className="cards_item">
                    <div className="card">
                        <div className="card_image"><img src="https://i.postimg.cc/J4HVWTzP/1.webp" alt="mixed vegetable salad in a mason jar. " /></div>
                        <div className="card_content">
                            <h2 className="card_title">Farmstand Salad <span>$9.00</span></h2>
                            <div className="card_text">
                                <p>Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of leafy greens and seasonal vegetables, fresh from the farmer&#39;s market.</p>
                                <p>Served with your choice of dressing on the side: housemade ranch, cherry balsamic vinaigrette, creamy chipotle, avocado green goddess, or honey mustard. Add your choice of protein for $2 more. </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="cards_item">
                    <div className="card">
                        <div className="card_image"><img src="https://i.postimg.cc/J4HVWTzP/1.webp" alt="mixed vegetable salad in a mason jar. " /></div>
                        <div className="card_content">
                            <h2 className="card_title">Farmstand Salad <span>$9.00</span></h2>
                            <div className="card_text">
                                <p>Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of leafy greens and seasonal vegetables, fresh from the farmer&#39;s market.</p>
                                <p>Served with your choice of dressing on the side: housemade ranch, cherry balsamic vinaigrette, creamy chipotle, avocado green goddess, or honey mustard. Add your choice of protein for $2 more. </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="cards_item">
                    <div className="card">
                        <div className="card_image"><img src="https://i.postimg.cc/J4HVWTzP/1.webp" alt="mixed vegetable salad in a mason jar. " /></div>
                        <div className="card_content">
                            <h2 className="card_title">Farmstand Salad <span>$9.00</span></h2>
                            <div className="card_text">
                                <p>Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of leafy greens and seasonal vegetables, fresh from the farmer&#39;s market.</p>
                                <p>Served with your choice of dressing on the side: housemade ranch, cherry balsamic vinaigrette, creamy chipotle, avocado green goddess, or honey mustard. Add your choice of protein for $2 more. </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </Container>
);

export default LMCard;