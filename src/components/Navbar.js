import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar() {
  return (
    <>

    <div>
        <h1>Out-Of-Fits</h1>
        <h2>Your UW Campus Thrift Community & Marketplace</h2>
    </div>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/loggedIn.js">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/loggedIn.js">Main</Nav.Link>
            <Nav.Link href="/search.js">Search</Nav.Link>
            <Nav.Link href="/post.js">Post</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Navbar;