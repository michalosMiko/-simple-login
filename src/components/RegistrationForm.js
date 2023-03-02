import React, { useState } from "react";
import { addUser, users } from "../data/users";


function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    addUser(username, password);

    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setErrorMessage("");

    alert("Registration successful!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </label>
      <div>{errorMessage}</div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
