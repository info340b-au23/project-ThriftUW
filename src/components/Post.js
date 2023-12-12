import React, { useState } from 'react';
import {Navbar} from './Navbar.js';
import { CreatePostForm } from './CreatePost.js';


export function Posts (props) {
    const [likes, setLikes] = useState(0);
    const [clicked, setClicked] = useState(false);

    let StaticPosts = props.staticPosts[0].posts; // Handle if not provided a prop
    console.log(StaticPosts)
    let Posts = StaticPosts.map((IndPost) => {
        console.log()
      return <StaticPost post={IndPost} />;
    }); 

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
                {Posts}
            </div>
      </div>
    );
};

export function StaticPost (props){
    let {userName, cardText, imgURL, alt, date, isLiked, comments} = props.post;
    
    return(
        <div className="container posts">
            <div className="card border-light mb-3 mt-5 post">
            <div className="card-body">
                <img src={imgURL} className="card-img-top" alt={alt}/>

                <div className="card-body-text">
                    <div className="card-title"> <small className="text-muted">{userName}</small></div>
                    <div className="card-text">{cardText}</div>
                    <a href="" className="btn">❤️</a>
                    <a href="" className="btn">💬</a>
                    <div className="card-footer bg-transparent"></div>
                    <p className="card-text"><small className="text-muted">{date}</small></p>
                </div>
            </div>
            </div>
        </div>
    );
}
