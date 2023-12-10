import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
          <div>
            <h1>Out-Of-Fits</h1>
            <h2>Your UW Campus Thrift Community & Marketplace</h2>
          </div>
          <nav>

            <input type="checkbox" id="nav-toggle" className="nav-toggle" />
            <label htmlFor="nav-toggle" className="dropdown-btn">
              &#9776; Menu
            </label>
            <ul>
                <li><Link to="/loggedIn.js">Main</Link></li>
                <li><Link to="/search.js">Search</Link></li>
                <li><Link to="/post.js">Posts</Link></li>
            </ul>
         </nav>
    );
}
export default Navbar;