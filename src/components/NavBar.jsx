import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Login from './Login';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Eventech</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Login />
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
