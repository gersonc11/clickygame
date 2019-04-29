import React, { Component } from "react";
import Me from './me';
import Skills from './skills';
import { Col, Row, Container } from 'reactstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import './about.css'


export class About extends Component {
    render() {
        return (
            <div className="about" id="about">
                <Col xs={12} sm={12} md={12} lg={12}>
                <Row>
                    <div className="about">
                        <Col xs={12} sm={{size:12}} md={{size:12}} lg={{size: 6, offset: 3}} id="me">
                            <div>
                                <Me/>
                            </div>
                            <div id="skills">
                                <Skills />
                            </div>
                        </Col>
                    </div>
                    </Row>
                </Col>
            </div>
        );
    }
}

export default About;