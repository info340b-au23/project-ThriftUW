import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../index.css';
import { Home } from './Main.js';
import { Posts } from './Post.js';
import { SearchForm } from './Search.js';


export function Navbar() {


  return (
    <header>

        <div className="loginHead">
               <h1>Out-Of-Fits</h1>
               <h2>Your UW Campus Thrift Community & Marketplace</h2>
        </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">Post</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/searchform">Search</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/post">Main</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </header>
  );
}
