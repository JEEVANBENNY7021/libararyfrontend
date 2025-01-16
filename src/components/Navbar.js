import React from 'react';

function Navbar() {
  return (
    <nav style={{ padding: '40px', backgroundColor: 'black', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,}}>
      <div style={{ fontSize: '20px', fontWeight: 'bold' }}> Library Management</div>
      <div style={{ display: 'flex', gap: '15px', marginRight:"70px"}}>
        <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
        <a href="/books" style={{ color: '#fff', textDecoration: 'none' }}>Books</a>
        <a href="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</a>
        <a href="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</a>


      </div>
    </nav>
  );
}

export default Navbar;
