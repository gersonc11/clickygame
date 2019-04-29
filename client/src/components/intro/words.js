import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col } from 'reactstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import './intro.css'

const Words = () => {
    return (
        <div>
            <Col xs={12} sm={12} md={12} lg={12} className="words">
                <Row>                    
                    <Col xs={{}} sm={{size: 4, offset: 4}} md={{size: 10, offset:1}} lg={{size: 4, offset: 4}}>
                    <h1 className="welcome">
                    Welcome to my Portfolio.
                    </h1>
                    </Col>
                </Row>
                <Row className="bounce">
                    <h4 id="arrow">
                        <FontAwesomeIcon icon="arrow-down" />
                    </h4>
                </Row>
            </Col>
        </div>
    );

}

export default Words;