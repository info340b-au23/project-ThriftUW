import React from "react";
import { Posts } from './Post.js'
import staticPosts from "../data/staticPosts.json";
import { CreatePostForm } from './CreatePost.js';
export function Home(props){
    
    return (
        <body>
            <main>
                <section id="posts">
                    <div className="card-container">
                        <CreatePostForm/>
                    </div>
                </section>
            </main>
        </body>
    );
}


