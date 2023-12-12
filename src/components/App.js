import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { SignInPage } from './Login.js';
import { Home } from './Main.js';
import { Navbar } from './Navbar.js';
import { Posts } from './Post.js';
import { SearchForm } from './Search.js';
import { Footer } from './Footer.js';


import staticPosts from "../data/staticPosts.json";

import DEFAULT_USERS from '../data/firebase.json';


export function App(props) {

  // Sign in User
  const [currentUser, setCurrentUser] = useState(null);
  const [authCheckComplete, setAuthCheckComplete] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        firebaseUser.userId = firebaseUser.uid;
        firebaseUser.userName = firebaseUser.displayName;
        setCurrentUser(firebaseUser);
      } else {
        setCurrentUser(null);
      }
      setAuthCheckComplete(true);
    });

    return () => unsubscribe();
  }, []);

  const RequireAuth = () => {
    if (!authCheckComplete) {
      return null;
    }
    if (currentUser) {
      return (
        <Routes>
          <Navigate to="/main" />;
        </Routes>
      );
    }
  };
  
  return (
        <div>
          
              <Navbar/>

                <Routes>
                  <Route path="/" element={<SignInPage />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/searchform" element={<SearchForm />} />
                  <Route path="/post" element={<Posts staticPosts={staticPosts}/>} />
                </Routes>

                
              <Footer/>
        </div>
  );
}

export default App;