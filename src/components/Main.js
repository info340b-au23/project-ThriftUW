import React from "react";
import { Post } from './Post.js';
import {Navbar} from './Navbar.js';

export function Home(props){
    
    return (
        <body>
            <header>
                <Navbar/>
            </header>
            <main>
                <section id="Posts">
                    <div className="card-container">

                        <div className="card">
                            <Post />
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

