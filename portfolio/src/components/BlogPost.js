import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogPosts from '../data/blogPost';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  navigate('/');
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {

    return <div className="container mx-auto px-4 py-20">Post not found.</div>;
  }

  return (
    <section className="section bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-4">{post.title}</h2>
        <p className="text-center text-gray-600 mb-8">{post.date}</p>
        <div
          className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg text-gray-800 blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </section>
  );
};

export default BlogPost;
