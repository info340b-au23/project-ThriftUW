import React, { useState } from 'react';
import { LoginForm } from './CreatePost.js';
import {Navbar} from './Navbar.js';
import { StaticPost } from './CreateStaticPost.js';
import staticPosts from "../data/staticPosts.json";


export function Posts (props) {
    const [likes, setLikes] = useState(0);
    const [clicked, setClicked] = useState(false);
    
    let StaticPosts = staticPosts || []; //handle if not provided a prop
    let indPost = StaticPosts.map(function(post, index) {
      return <StaticPost key={index} post={post} />;
    })
  
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
            <div>
                <StaticPosts/>
            </div>
      </div>
    );
};