import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import SignInPage from './Login.js';
import { Home }from './Main.js';
import {Navbar} from './Navbar.js';
import { Posts } from './Post.js';
import { SearchForm } from './Search.js';
import {Footer} from './Footer.js';


import staticPosts from "../data/staticPosts.json";

import DEFAULT_USERS from '../data/firebase.json';


export function App(props) {

  // Sign in User
  const [currentUser, setCurrentUser] = useState(null);
  const navigateTo = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if(user) {
        user.userName = user.displayName;
        user.userId = user.uid;
        setCurrentUser(user);
      }
      else {
        setCurrentUser(null);
      }
    })
  }, [])

  const loginUser = (userObj) => {
    setCurrentUser(userObj);
    
    if(userObj.userId !== null){
      navigateTo('/main'); 
    }
  }

  return (
        <div>
          
              <Navbar/>

                <Routes>
                  <Route path="/" element={<SignInPage currentUser={currentUser} loginCallback={loginUser}/>} />
                  <Route path="/Main" element={<Home />} />
                  <Route path="/Search" element={<SearchForm />} />
                  <Route path="/Post" element={<Posts staticPosts={staticPosts}/>} />
                </Routes>

                
              <Footer/>
        </div>
  );
}