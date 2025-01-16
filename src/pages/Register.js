import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  async function register() {
    if (password === cpassword) {
      const user = {
        name,
        email,
        password,
      };

      console.log(user);

      try {
        const result = await axios.post("http://localhost:5000/api/users/register", user);
         console.log(result.data);

        setName("");
        setEmail("");
        setPassword("");
        setCPassword("");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Passwords do not match");
    }
  }

  return (
    <div style={{ padding: '30px', backgroundColor: '#f9f9f9', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', margin:"20px"}}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Create Account</h2>
        <p style={{ marginBottom: '15px', textAlign: 'center', color: '#555' }}>Join us and start booking!</p>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            style={{ width: '90%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <div style={{ marginBottom: '20px' }}>
          <input
            type="password"
            style={{ width: '90%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Confirm your password"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
        </div>
        <button
          style={{ width: '90%', padding: '10px', backgroundColor: '#F2D54E', color: 'black', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          onClick={register}
        >
          Register
        </button>
        <p style={{ marginTop: '20px', textAlign: 'center', color: '#555' }}>
          Already have an account? <a href="/login" style={{ color: '#007bff', textDecoration: 'none' }}>Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
