import React from "react";
import { Col, Row } from "reactstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import './about.css'

const Skills = () => {
    return (
        <div>
            <Col xs={{}} sm={{size:6,offset:6}} md={{}} lg={{size: 6, offset: 8}}>
                <h1 id="skTitle">Skills</h1>
                <h4>Front End</h4>
                <ul>
                    <li>Javascript (ES6)</li>
                    <li>React.js</li>
                    <li>JQuery</li>
                    <li>Bootstrap</li>
                    <li>Materialize</li>
                    <li>ES6</li>
                    <li>Responsive Design</li>

                </ul>
                <h4>Back End</h4>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Handlebars.js</li>
                    <li>MongoDb</li>
                    <li>MySQL</li>
                    <li>Rest Api</li>
                    <li>MVC Model</li>
                    <li>WebPack</li>
                </ul>
                <h4>Tools</h4>
                <ul>
                    <li>Github</li>
                    <li>Visual Studio Code</li>
                    <li>Postman</li>
                    <li>MySQL Workbench</li>
                    <li>Moongoose</li>
                    <li>Heroku</li>
                    <li>Chai</li>
                    <li>Mocha</li>
                    <li>AWS</li>
                    <li>NPM</li>
                </ul>
            </Col>
        </div>
    );
}

export default Skills;