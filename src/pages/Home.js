import React from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
  const nav = useNavigate();

  return (
    <div style={{backgroundColor:"white"}}>
      <div style={{ padding: '40px 0', position: 'relative', minWidth: '90vw' }}>
       
        <div style={{ marginLeft: '5rem', padding: '56px 64px', color: 'white', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h1 style={{ fontFamily: 'Orbitron', fontSize: '3rem', fontWeight: 'bold' }}>
            GOOD <span style={{ color: '#F2D54E' }}>BOOKS</span>{" "}
          </h1>
          <div style={{ display: 'flex', fontFamily: 'Orbitron', fontSize: '5rem', fontWeight: 'bold' }}>
            <h1>LIBR</h1>
            <img 
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLX0T3Ufo9lEjLJjYxKjDF7rFk41quZvjpzQ&s"} 
              style={{ width: '11rem' }} 
              alt="Library Icon" 
            />
            <h1>ARY</h1>
          </div>

          <p style={{ fontSize: '1.25rem', fontFamily: 'Saira', color:'black' }}>
            Dive into our extensive collection of literary treasures. From
            timeless classics to <br />
            contemporary bestsellers, we have something for every reader. Whether
            you're <br />
            seeking thrilling mysteries, heartwarming romances, or
            thought-provoking <br />
            non-fiction, our library is your gateway to endless adventures.
          </p>
          <button
            onClick={() => nav("/login")}
            style={{
              backgroundColor: '#F2D54E',
              color: 'black',
              fontFamily: 'Saira',
              fontSize: '1.25rem',
              padding: '8px 20px',
              fontWeight: 'bold',
              borderRadius: '0.5rem'
            }}
            className="hover:bg-yellow-400"
          >
            Start Borrowing!!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
