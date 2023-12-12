import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';

import {SignInPage} from './Login.js';
import { Home }from './Main.js';
import {Navbar} from './Navbar.js';
import { Posts } from './Post.js';
import { SearchForm } from './Search.js';
import {Footer} from './Footer.js';


//just for funsies
import staticPosts from "../data/staticPosts.json";
//
import DEFAULT_USERS from '../data/firebase.json';


export function App(props) {

  // Sign in User
  const [setCurrentUser] = useState(DEFAULT_USERS[0])
  const navigateTo = useNavigate();

  /* useEffect(() => {
    loginUser(DEFAULT_USERS[0])
  }, [])

  const loginUser = (userObj) => {
    console.log("logging in as", userObj.userName);
    setCurrentUser(userObj);
    if(userObj.userId !== null) {
      navigateTo('/chat/general');
    }
  }*/
  

  return (
        <div>
              <Navbar/>

                <Routes>
                  <Route path="/Main" element={<Home />} />
                  <Route path="/Search" element={<SearchForm />} />
                  <Route path="/Post" element={<Posts staticPosts={staticPosts}/>} />
                </Routes>
                
              <Footer/>
        </div>
  );
}

export default App;