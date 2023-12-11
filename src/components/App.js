import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';

import SignInPage from './Login';
import { Home }from './main';
import Navbar from './Navbar';
import { Post } from './post';

import DEFAULT_USERS from '../data/firebase.json';

export default function App(props) {

  // Sign in User
  const [setCurrentUser] = useState(DEFAULT_USERS[0])
  const navigateTo = useNavigate();

  useEffect(() => {
    loginUser(DEFAULT_USERS[1])
  }, [])

  const loginUser = (userObj) => {
    console.log("logging in as", userObj.userName);
    setCurrentUser(userObj);
    if(userObj.userId !== null) {
      navigateTo('/chat/general');
    }
  }

  return (
        <div>
             <Navbar />
             <main>
                <Routes>
                  <Route path="/Login.js" element={<SignInPage/>} />
                  <Route path="/loggedIn.js" element={<Home />} />
                  <Route path="/search.js" element={<searchForm />} />
                  <Route path="/post.js" element={<Post />} />
                </Routes>
             </main>
        </div>
  );
}
