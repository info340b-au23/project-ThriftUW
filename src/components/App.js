import react from 'react';
import {LoginForm} from './Login.js';
import {Post} from './post.js';
import {Home} from './loggedIn.js';
import {searchForm} from './search.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(props) {
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

export default App;
