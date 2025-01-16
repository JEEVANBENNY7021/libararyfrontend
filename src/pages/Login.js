import React, { useState } from "react";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function Login() {
    const user = {
      email,
      password,
    };

    try {
      setLoading(true);
      const result = (await axios.post("http://localhost:5000/api/users/login", user)).data;
      setLoading(false);

      localStorage.setItem("currentUser", JSON.stringify(result));
      window.location.href = "/home";
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError(true);
    }
  }

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Welcome Back!</h2>
        <p style={{ marginBottom: '15px', textAlign: 'center', color: '#555' }}>Please login to your account</p>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="email"
            style={{ width: '90%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="password"
            style={{ width: '90%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          style={{ width: '90%', padding: '10px', backgroundColor: '#F2D54E', color: 'black', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          onClick={Login}
        >
          Login
        </button>
        {loading && <p style={{ textAlign: 'center', marginTop: '10px' }}>Loading...</p>}
        {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>Login failed. Please try again.</p>}
        <p style={{ marginTop: '20px', textAlign: 'center', color: '#555' }}>
          Don't have an account? <a href="/register" style={{ color: '#007bff', textDecoration: 'none' }}>Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
