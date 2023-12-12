import React from "react";
import { Posts } from './Post.js'

export function Home(props){
    
    return (
        <body>
            <main>
                <section id="posts">
                    <div className="card-container">
                        <div className="card">
                            <Posts />
                        </div>
                    </div>
                </section>
            </main>
        </body>
    );
}


