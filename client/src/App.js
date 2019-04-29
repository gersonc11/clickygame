import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
library.add(faArrowDown)



class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navigation />
        </Router>
        <Intro />
        <About />
        <Work />
        <Contact />
      </div>
    );
  }
}

export default App;
