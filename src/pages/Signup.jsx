import React, { useState } from "react";
import axios from "axios";
import "../styles/signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        '/api/auth/register',
        {
          email: email,
          password: password,
          role: role,
        }
      );
      setMessage("Signup successful!");
      return response.data;
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data);
      } else {
        setMessage("Server error");
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-wrapper">
        <h2 className="signup-title">Sign Up</h2>

        <form onSubmit={handleSignup} className="signup-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
          />

          <select value={role} onChange={(e) => setRole(e.target.value)} className="signup-select">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>

          <button type="submit" className="signup-button">Sign Up</button>
        </form>

        <div className="signup-footer">
          <p className="signup-message">{message}</p>
          <p className="signin-link">
            Already have an account? <a href="/login">Sign in</a>.
          </p>
        </div>
      </div>
    </div>
  );
}


export default Signup;
