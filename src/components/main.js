import React from "react";
import {CreateStaticPost} from './post.js'

export function Home(props){
    
    return (
        <body>
            <header>
                <div className="head">
                    <h1>Out-Of-Fits</h1>
                    <h2>Your UW Campus Thrift Community & Marketplace</h2>
                </div>
                <nav>

                    <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
                    <label for="nav-toggle" className="dropdown-btn">&#9776; Menu</label>
                    <ul>
                        <li><a href="main.js">Main Page</a></li>
                        <li><a href="search.js">Search</a></li>
                        <li><a href="posts.js">Post Fits</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="Posts">
                    <div className="card-container">

                        <div className="card">
                            <CardList />
                        </div>
                        
                    </div>
                </section>
            </main>
            <footer>
                <div className="container">
                    <p>&copy; 2023 A ThriftUW project. All rights reserved.</p>
                </div>
            </footer>
          </body>
    );
}

