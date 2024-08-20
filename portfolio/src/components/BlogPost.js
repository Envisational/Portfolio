import React from 'react';
import { useParams } from 'react-router-dom';

const blogPosts = [
  {
    title: 'My Transition from an English teacher to a Software Developer',
    date: 'August 18, 2024',
    content: 'In this post, I share how I transitioned from a background in English Literature to becoming a Backend Developer...'
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <div className="container mx-auto px-4 py-20">Post not found.</div>;
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
        <p className="text-gray-600 mb-8">{post.date}</p>
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
      </div>
    </section>
  );
};

export default BlogPost;
