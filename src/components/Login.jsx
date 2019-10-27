import React from 'react';
import "../styles/Login.css";

const login = () => (


<form action = "action_page.php" method="post">
  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input className="userInputs" type="text" placeholder="Enter Username" name="uname" required />

    <label for="psw"><b>Password</b></label>
    <input className="userInputs" type="password" placeholder="Enter Password" name="psw" required />

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember me
    </label>
  </div>
</form>
);

export default login;