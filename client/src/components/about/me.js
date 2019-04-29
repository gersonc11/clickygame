import React from "react";
import { Col, Row } from 'reactstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import './about.css'

const Me = () => {
    return (
        <div>
            <Col xs={{}} sm={{size:6}} md={{}} lg={6}>
                    <div id="desc">
                        <h1>About Me</h1>
                        <p>I'm a MERN stack web developer based out of the Dallas,Tx area.
                            Who specialized in backend development. I enjoy learning new development and
                            cybersecurity technologies. Founder of Menuloc and looking to
                            develop more web applications and products that create solutions.
                        </p>
                    </div>
            </Col>
        </div>
    );
}

export default Me;