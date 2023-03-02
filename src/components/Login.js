import React, { useState } from "react";
import WelcomePage from "./WelcomePage";
import "./Login.css";



function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // ověření uživatelských přihlašovacích údajů a nastavení stavové proměnné loggedIn na true
    // pokud ověření proběhlo úspěšně
    setLoggedIn(true);
  };

  return (
    <div>
        <div><h2>Login</h2></div>
      {!loggedIn ? (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
          
        </form>
      ) : (
        <WelcomePage />
      )}
      
    </div>
  );
}

export default Login;
