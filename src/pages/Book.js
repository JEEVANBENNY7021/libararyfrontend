import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogForm from '../components/BlogForm';
import BlogList from '../components/BlogList';
import BlogSearch from '../components/BlogSearch';

const Book = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const fetchPosts = async (query = '') => {
    try {
      const response = await axios.get(`https://libararybackend-3.onrender.com/api/posts?title=${query}`);
      setPosts(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`https://libararybackend-3.onrender.com/api/posts/${id}`);
      fetchPosts();
    } catch (err) {
      console.error(err);
    }
  };

  const updatePost = async (id, updatedData) => {
    try {
      await axios.put(`https://libararybackend-3.onrender.com/api/posts/${id}`, updatedData);
      fetchPosts();
      setEditingPost(null); // Reset editing state
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditClick = (post) => {
    setEditingPost(post);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      
      <h1>Welcome to Library</h1>
      <BlogSearch fetchPosts={fetchPosts} />
      <BlogForm fetchPosts={fetchPosts} initialValues={editingPost} />
       <BlogList posts ={posts} updatedPost={updatedPost} handleEditClick={handleEditClick} />
      <BlogList posts={posts} deletePost={deletePost} setEditingPost={handleEditClick} />
    </div>
  );
};

export default Book;
