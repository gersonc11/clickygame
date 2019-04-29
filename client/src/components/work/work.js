import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import menuLoc from './mockup/menuloc.png';
import trip from './mockup (1)/trip-finder.png';
import liri from './mockup (2)/liri.png';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import './work.css'


const Work = () => {
    return (
        <div id="work">
            <Col>
                <Row>
                    <Col xs={{}} md={{size:6}} lg={{size: 1, offset: 2}}>
                        <img className="phone" src={menuLoc} alt="Card image cap" />
                    </Col>
                    <Col xs={{offset:0}} md={{size: 6}} lg={{size:2, offset:1}} className="info" id="menuloc">
                        <Card body dark style={{ backgroundColor: 'white', borderColor: '#333' }}>
                            <CardTitle>MenuLoc</CardTitle>
                            <CardText>MenuLoc is an application that pulls up the menu for the restaurant that you are currently in if it is availble. The purpose for it being built is to 
                                reduce the use of paper and other materials used to print menus and make the restaurant experience easier. It was built using Bootstrap and Jquery for front end, Express, Google Maps Api, Node.js, and MySQL for the back end and database.
                                </CardText>
                            <Button href="https://www.menuloc.com" className="mt-2" style={{ color: 'black', backgroundColor: "steelblue" }}>Website</Button>
                        </Card>
                    </Col>
                    <Col xs={{}} md={{size: 6}} lg={{size: 1}}>
                        <img className="phone laptop" src={liri} alt="Card image cap" />
                    </Col>
                    <Col xs={{}} md={{size: 6}} lg={{size: 2, offset: 2}} className="info" id="liri">
                        <Card body dark style={{ backgroundColor: 'white', borderColor: '#333' }}>
                            <CardTitle>Liri Cli App</CardTitle>
                            <CardText>Liri is a Node.js application to find the information of Movies, the spotify information of an artist, and upcoming show dates for a band.
                                Liri uses Node.js for server side logic. Axios to make Api calls and the 3 Api's used are the Bands In Town Api, Spotify Api, and the IMDB Api. 
                            </CardText>
                            <Button href="https://github.com/gersonc11/liri-node-app" style={{ backgroundColor: 'black' }}>Github</Button>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{}} md={{size: 6}} lg={{size: 1,offset:4}}>
                        <img className="phone" src={trip} alt="Card image cap" />
                    </Col>
                    <Col xs={{}} md={{size: 6}} lg={{size: 2, offset: 1}} className="info" id="trip">
                        <Card body dark style={{ backgroundColor: 'white', borderColor: '#333' }}>
                            <CardTitle>trip.finder</CardTitle>
                            <CardText>trip.findr is a full stack application that was built with 3 other developers. trip.findr was built to make it easy to find a place to 
                                take a vacation when you can't decide where to go. The technologies used were MySQL, an ORM that we created, Bootstrap, Jquery, Express, and Node.js. 
                            </CardText>
                            <Button href="https://github.com/gersonc11/project-2" style={{ backgroundColor: 'black' }}>Github</Button>
                            <Button href="https://trip-findr.herokuapp.com/" className="mt-2" style={{ color: 'black', backgroundColor: "steelblue" }}>Website</Button>
                        </Card>
                    </Col>
                    </Row>
            </Col>
        </div>
    );
};

export default Work;
