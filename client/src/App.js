import React, { Component, Fragment } from "react";
import Navigation from './components/navbar/navbar';
import Characters from './components/characters/character';
import characters from './data/characters';
import { Col, Row, Container } from 'reactstrap';
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import "./../node_modules/bootstrap/dist/css/bootstrap-grid.css";


const charSize = {
  width: 185,
  height: 200,
  marginTop: 100,
  display: 'flex',
  flexDirection: 'row',
  border: 'solid 1px black',
}

const firstHalf = characters.slice(0, 6);
const secondHalf = characters.slice(6);








class App extends Component {
    constructor(props) {
    super(props);
    // setting state for character list from list of characters.json
    this.state = {
      first: firstHalf,
      second: secondHalf,
      count: 0,
      clicked: []
    }
    this.clickCount = this.clickCount.bind(this);
  }

  clickCount = event => {

    const clickedImg = event.target.id;
    const alreadyClicked = this.state.clicked.includes(clickedImg);

    if(alreadyClicked) {
      this.setState({
        first: this.state.first.sort((a,b) => {
          return 0.5 - Math.random();
        }),
        clicked: [],
        count:0
      });
      this.setState({
        second: this.state.second.sort((a,b) => {
          return 0.5 - Math.random();
        }),
        clicked:[],
        count:0
      });
      alert('You Lose')
    } else {
      this.state.clicked.push(clickedImg)
      console.log(this.state.clicked)
      this.setState({
        first: this.state.first.sort((a,b) => {
          return 0.5 - Math.random();
        }),
        clicked: this.state.clicked.push(clickedImg),
        count: this.state.count + 1

      })
      this.setState({
        second: this.state.second.sort((a,b) => {
          return 0.5 - Math.random();
        }),
        clicked: this.state.clicked.push(clickedImg),
        count: this.state.count + 1
      });
    }
    this.setState({
      count: this.state.count + 1
    }, console.log(this.state.count))
  }
render() {
    return (
      <div>
        <Navigation 
        count={this.state.count}/>
        <Container>
        <Row>
          {this.state.first.map(character => (
            <Characters
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              count={character.count}
              onClick={this.clickCount}
              style={charSize} />
          ))}
        </Row>
        <Row lg={{ size: 3 }}>
          {this.state.second.map(character => (
            <Characters
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              count={character.count}
              onClick={this.clickCount}
              style={charSize} />
          ))}
        </Row>
        </Container>
      </div>
    );
  }
}

export default App;
