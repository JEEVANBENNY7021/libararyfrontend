const BlogList = ({ posts, deletePost, setEditingPost }) => {
  const postStyle = {
    border: '2px solid #ccc',
    padding: '30px',
    width: '300px',
    marginBottom: '10px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'flex-start',
    boxSizing: 'border-box',
  };

  const titleStyle = {
    fontSize: '1.2em',
    marginBottom: '5px',
  };

  const authorStyle = {
    fontStyle: 'italic',
    color: '#666',
  };

  const tagsStyle = {
    fontSize: '0.9em',
    color: '#888',
  };

  const dateStyle = {
    fontSize: '0.8em',
    color: '#555',
  };

  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '3px',
    cursor: 'pointer',
    marginRight: '5px',
  };

  const imgStyle = {
    borderRadius: '5px',
    marginBottom: '10px',
    maxWidth: '100%',
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginLeft: '40px' }}>
      {posts.map((post) => (
        <div key={post._id} style={postStyle}>
          <h3 style={titleStyle}>{post.title}</h3>
          <p>Copies: {post.content}</p>
          <p style={authorStyle}>Author: {post.author}</p>
          <p style={tagsStyle}>ISBN: {post.tags.join(', ')}</p>
          {/* Display image if present */}
          {post.imageUrl && <img src={post.imageUrl} alt={post.title} style={imgStyle} />}
          <p style={dateStyle}>Published Date: {new Date(post.createdAt).toLocaleDateString()}</p>
          <div>
            <button
              style={buttonStyle}
              onClick={() => deletePost(post._id)}
            >
              Delete
            </button>
            <button
              style={buttonStyle}
              onClick={() => setEditingPost(post)}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
