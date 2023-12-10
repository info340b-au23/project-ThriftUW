import react from 'react';
import {LoginForm} from './Login.js';
import {Post} from './post.js';
import {Home} from './loggedIn';
import {searchForm} from './search.js'

function App(props) {
  return (
      <div>
          <LoginForm/>
          <searchForm /> 
          <Post/>
          <Home/>

        {/* <SearchPage /> */}
        {/* <AboutPage /> */}
      </div>
    );
}

export default App;
