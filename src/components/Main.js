import React from "react";
import { Post } from './Post.js';
import {Navbar} from './Navbar.js';
import {Posts} from './Post.js'

export function Home(props){
    
    return (
        <body>
            <main>
                <section id="Posts">
                    <div className="card-container">
                        <div className="card">
                            <Post />
                        </div>
                    </div>
                </section>
            </main>
        </body>
    );
}


