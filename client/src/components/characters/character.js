import React from "react";
import { Col, Row } from 'reactstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.css";

const Characters = (props) => {

    return (
        <div onClick={props.onClick}>
            <img alt={props.name} src={props.image} count={props.count} style={props.style} />
        </div>
    );
}

export default Characters;