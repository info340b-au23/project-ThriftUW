import React from 'react';

export function LoginForm (props) {
  return (
    <main>
      <form id="loginForm" method="post">
        <div className="containerLogin">
          <label><b>User ID</b></label>
          <input type="text" placeholder="Enter User ID" name="userid" required />

          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required />

          <button type="submit">Login</button>
        </div>
      </form>
    </main>
  );
};

//export default LoginForm;