import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const BlogForm = ({ fetchPosts, initialValues }) => {
  const [title, setTitle] = useState(initialValues?.title || '');
  const [content, setContent] = useState(initialValues?.content || '');
  const [author, setAuthor] = useState(initialValues?.author || '');
  const [tags, setTags] = useState(initialValues?.tags?.join(', ') || '');
  const [createdAt, setCreatedAt] = useState(initialValues?.createdAt || '');
  const [imageUrl, setImageUrl] = useState(initialValues?.imageUrl || ''); // New state
  useEffect(() => {
    if (initialValues) {
      setTitle(initialValues.title);
      setContent(initialValues.content);
      setAuthor(initialValues.author);
      setTags(initialValues.tags.join(', '));
      setCreatedAt(initialValues.createdAt);
      setImageUrl(initialValues.imageUrl || ''); // Initialize imageUrl
    }
  }, [initialValues]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        title,
        content,
        author,
        tags: tags.split(','),
        imageUrl, 
      };

      if (createdAt) {
        postData.createdAt = createdAt;
      }

      if (initialValues) {
        await axios.put(`https://libararybackend-3.onrender.com/api/posts/${initialValues._id}`, postData);
      } else {
        await axios.post('https://libararybackend-3.onrender.com/api/posts', postData);
      }

      fetchPosts();
      alert('Operation successful');
      setTitle('');
      setContent('');
      setAuthor('');
      setImageUrl('');
      setTags('');
      setCreatedAt('');
      window.location.reload(); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input placeholder="copies" value={content} onChange={(e) => setContent(e.target.value)} required></input>
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} /> {/* New input */}
      <input type="text" placeholder="ISBN" value={tags} onChange={(e) => setTags(e.target.value)} />
      <input type="date" placeholder="Creation Date" value={createdAt} onChange={(e) => setCreatedAt(e.target.value)} />
      <button type="submit">{initialValues ? 'Update' : 'Submit'}</button>
    </form>
  );
};

export default BlogForm;
