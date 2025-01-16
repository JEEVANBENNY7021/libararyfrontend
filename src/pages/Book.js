import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogForm from '../components/BlogForm';
import BlogList from '../components/BlogList';
import BlogSearch from '../components/BlogSearch';

const Book = () => {
  const [posts, setPosts] = useState([]); // State to hold posts
  const [editingPost, setEditingPost] = useState(null); // State for editing

  // Fetch posts from API
  const fetchPosts = async (query = '') => {
    try {
      const response = await axios.get(`https://libararybackend-3.onrender.com/api/posts?title=${query}`);
      setPosts(response.data);
    } catch (err) {
      console.error('Error fetching posts:', err);
    }
  };

  // Delete a post
  const deletePost = async (id) => {
    try {
      await axios.delete(`https://libararybackend-3.onrender.com/api/posts/${id}`);
      fetchPosts();
    } catch (err) {
      console.error('Error deleting post:', err);
    }
  };

  // Update a post
  const updatedPost = async (id, updatedData) => {
    try {
      await axios.put(`https://libararybackend-3.onrender.com/api/posts/${id}`, updatedData);
      fetchPosts(); // Refresh posts after update
      setEditingPost(null); // Clear editing state
    } catch (err) {
      console.error('Error updating post:', err);
    }
  };

  // Handle edit click
  const handleEditClick = (post) => {
    setEditingPost(post); // Set the post to edit
  };

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Welcome to Library</h1>
      <BlogSearch fetchPosts={fetchPosts} />
      <BlogForm fetchPosts={fetchPosts} initialValues={editingPost} />
      <BlogList
        posts={posts}
        deletePost={deletePost}
        setEditingPost={handleEditClick}
        updatedPost={updatedPost} // Pass updatedPost to BlogList
      />
    </div>
  );
};

export default Book;
