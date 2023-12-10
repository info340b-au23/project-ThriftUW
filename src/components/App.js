import react from 'react';
import {LoginForm} from './Login.js';
import {Post} from './post.js';
import {Home} from './loggedIn.js';
import {searchForm} from './search.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(props) {

  // Sign in User
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0])
  const navigateTo = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        firebaseUser.userId = firebaseUser.uid;
        firebaseUser.userName = firebaseUser.displayName;
        firebaseUser.userImg = firebaseUser.photoURL || "/img/null.png";
        setCurrentUser(firebaseUser);
      }
      else {
        setCurrentUser(DEFAULT_USERS[0]);
      }
    })

  }, [])

  const loginUser = (userObj) => {
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

export default App;
