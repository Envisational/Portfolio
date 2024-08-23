import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogPosts from '../data/blogPost';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find((post) => post.id === parseInt(id));

  useEffect(() => {
    // Hide the header
    const header = document.querySelector('header');
    if (header) {
      header.style.display = 'none';
    }

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

  if (!post) {
    return <div className="container mx-auto px-4 py-20">Post not found.</div>;
  }

  return (
    <section
      className="section min-h-screen bg-no-repeat bg-cover"
      style={{
        background: 'radial-gradient(circle, rgba(10, 10, 100, 0.9) 10%, rgba(10, 10, 100, 0) 50%)',
        backdropFilter: 'blur(2px)',
      }}
    >
      <div className="container mx-auto px-4 relative" >
        <button
          onClick={handleBackClick}
          className="absolute top-4 left-4 md:left-8 bg-white text-black hover:scale-110 transform transition duration-300 hover:bg-white hover:text-black p-2 rounded-full inline-block"
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
