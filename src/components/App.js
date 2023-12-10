import React, {useState, useEffect} from 'react';
import { Routes, Route, Outlet, Navigate, useNavigate} from 'react-router-dom';

import SignInPage from './Login';
import { Home }from './main';
import Navbar from './Navbar';
import { Post } from './post';
import searchForm from './search';

import DEFAULT_USERS from '../data/firebase.json';

export default function App(props) {

  // Sign in User
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0])
  const navigateTo = useNavigate();

  useEffect(() => {
    loginUser(DEFAULT_USERS[1])
  }, [])

  const loginUser = (userObj) => {
    console.log("logging in as", userObj.userName);
    setCurrentUser(userObj);
  }

  return (
    <Router>
        <div>
             <Navbar />
             <main>
                <Routes>
                  <Route path="/Login.js" element={<LoginForm/>} />
                  <Route path="/loggedIn.js" element={<Home />} />
                  <Route path="/search.js" element={<searchForm />} />
                  <Route path="/post.js" element={<Post />} />
                </Routes>
             </main>
        </div>
    </Router>
  );
}
