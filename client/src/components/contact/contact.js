import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Row } from 'reactstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import './contact.css'
import { faGithub, faLinkedin } from "../../../node_modules/@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <div id="contact">
            <Col xs={12} sm={12} md={12} lg={12}>
                <Row>
                    <Col xs={{}} sm={12} md={12} lg={{ size: 2, offset: 5 }}>
                        <h1>Contact Info</h1>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col xs={12} sm={2} md={{ size: 4, offset: 4 }} lg={{ size: 2, offset: 5 }}>
                        <p className="pcon"><strong>Phone:</strong><a className="conts" href="tel:4692475313">469-247-5313</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={2} md={{ size: 4, offset: 4 }} lg={{ size: 2, offset: 5 }}>
                            <p className="econ"><strong>Email:</strong><a className="conts" href="mailto:gersoncruz91@gmail.com">gersoncruz91@gmail.com</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{size: 12}} sm={1} md={{size: 4, offset: 4}} lg={{ size: 2, offset: 5 }}>
                        <span>
                            <a href="https://github.com/gersonc11"><FontAwesomeIcon icon={faGithub} /></a>
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/in/gerson-cruz-11719316a/"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </span>
                    </Col>
                </Row>
            </Col>
        </div>
    );

}

export default Contact;