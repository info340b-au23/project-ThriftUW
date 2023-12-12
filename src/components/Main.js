import React from "react";
import { Posts } from './Post.js'
import staticPosts from "../data/staticPosts.json";

export function Home(props){
    
    return (
        <body>
            <main>
                <section id="posts">
                    <div className="card-container">
                        <div className="card">
                        // No prop ius passed in!
                        <Posts staticPosts={staticPosts}/>
                        </div>
                    </div>
                </section>
            </main>
        </body>
    );
}


