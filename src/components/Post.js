import React, { useState } from 'react';
import {Navbar} from './Navbar.js';
import { CreatePostForm } from './CreatePost.js';


export function Post (props) {
    const [likes, setLikes] = useState(0);
    const [clicked, setClicked] = useState(false);
    
    //get post, map existing comments and add new comment
    const handleSubmit = () => {

        const handleClick = () => {
            setClicked(true);

            if (clicked) {
                setLikes(likes+1);
            } else {
                setLikes(likes-1);
            }
            setClicked(false);
        }
    }


    return (
        <div>
            <main>
                <div>
                    <CreatePostForm />
                </div>
            </main>
        </div>
    );
};



