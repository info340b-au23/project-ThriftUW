import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export function Navbar() {


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/main">Main</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="search">Search</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="post">Post</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* <div>
        <h1>Out-Of-Fits</h1>
        <h2>Your UW Campus Thrift Community & Marketplace</h2>
    </div>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/loggedIn.js">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/main"> Main </NavLink>
            <NavLink to="/search">Search </NavLink>
            <NavLink to="/post"> Post </NavLink>

          </Nav>
        </Container>
      </Navbar> */}
    </>
  );
}
