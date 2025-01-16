import React, { useState } from 'react';

const BlogSearch = ({ fetchPosts }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    fetchPosts(query);
  };

  const inputStyle = {
    padding: '10px',
    marginRight: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '300px',
  };

  const buttonStyle = {
    backgroundColor: '#F2D54E',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

 
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <input 
        type="text" 
        placeholder="Search by title " 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        style={inputStyle} 
      />
      <button 
        onClick={handleSearch} 
        style={buttonStyle}
      >
        Search
      </button>
    </div>
  );
};

export default BlogSearch;
