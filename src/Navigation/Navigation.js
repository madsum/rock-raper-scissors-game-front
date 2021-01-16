import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import './Navigation.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
  return (
    <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Rock paper scissors</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/">Register name</Nav.Link>
              <Nav.Link href="/game">Game</Nav.Link>
              <Nav.Link href="/result">View Score</Nav.Link>
             </Nav>
          </Navbar.Collapse>
        </Navbar>
    </>
  );
};
export default withRouter(Navigation);