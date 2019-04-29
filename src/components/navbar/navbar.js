import React from "react";
import './navbar.css'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

const spacing = {
  marginLeft: 1200 
}

const Navigation = (props) => {
    return (
      <div className="navigation">
        <Navbar color="light" light expand="md" fixed="top">
          <NavbarBrand ml={2}>Clicky Game</NavbarBrand>
            <Nav navbar>
              <NavItem >
                  <p style={spacing}>Score: {props.count}</p>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }

export default Navigation;