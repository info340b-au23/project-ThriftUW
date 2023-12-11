import React from "react";
import { Post } from './Post.js';
import {Navbar} from './Navbar.js';
import {CreateStaticPost} from './CreatePost.js';

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


