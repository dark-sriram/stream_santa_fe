import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/api/auth/login",
        {
          email: email,
          password: password,
        }
      );

      setMessage("Login successful!");
      localStorage.setItem("token", response.data);
      // Redirect or something
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data);
      } else {
        setMessage("Server error");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h2 className="login-title">Sign In</h2>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />

          <button type="submit" className="login-button">Sign In</button>
        </form>

        <div className="login-footer">
          <p className="login-message">{message}</p>
          <p className="signup-link">
            New to Santa Streaming? <a href="/signup">Sign up now</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
