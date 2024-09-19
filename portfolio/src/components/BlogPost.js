import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogPost = () => {
  const { _id } = useParams();
  const navigate = useNavigate();

  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Hide the header
    const header = document.querySelector('header');
    if (header) {
      header.style.display = 'none';
    }

    // Fetch all blog posts from the backend
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('http://localhost:8000/public/blogs');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();

    // Clean up to show the header when the component unmounts
    return () => {
      if (header) {
        header.style.display = '';
      }
    };
  }, []);

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-20">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-20">
        Error: {error.message}
      </div>
    );
  }

  const post = blogPosts.find((post) => post._id === _id);

  if (!post) {
    return <div className="container mx-auto px-4 py-20">Post not found.</div>;
  }

  return (
    <section
      className="section min-h-screen bg-no-repeat bg-cover"
      style={{
        background:
          'radial-gradient(circle, rgba(10, 10, 100, 0.9) 10%, rgba(10, 10, 100, 0) 50%)',
        backdropFilter: 'blur(2px)',
      }}
    >
      <div className="container mx-auto px-4 relative">
        <button
          onClick={handleBackClick}
          className="absolute top-4 left-4 md:left-8 bg-white text-black hover:scale-110 transform transition duration-300 p-2 rounded-full inline-block"
          style={{
            position: 'fixed',
            zIndex: 1000,
            backdropFilter: 'blur(10px)',
          }}
        >
          Back
        </button>
        <h2 className="section-heading mb-4 text-white">{post.title}</h2>
        <p className="text-center text-gray-300 mb-8">{post.date}</p>
        <div
          className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg text-gray-800 blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </section>
  );
};

export default BlogPost;
