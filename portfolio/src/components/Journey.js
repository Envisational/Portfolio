// src/components/Journey.js
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BlogContext } from '../BlogContext'; // Import BlogContext

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  const { blogPosts, loadingBlogs, errorBlogs } = useContext(BlogContext);

  useEffect(() => {
    if (!loadingBlogs && !errorBlogs) {
      gsap.fromTo(
        '.journey-section',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.journey-section',
            start: 'top 75%',
            toggleActions: 'play none none reset',
          },
        }
      );
    }
  }, [loadingBlogs, errorBlogs]); // Re-run when loading or error state changes

  if (loadingBlogs) {
    return <div className="container mx-auto px-4 py-20">Loading...</div>;
  }

  if (errorBlogs) {
    return (
      <div className="container mx-auto px-4 py-20">
        Error: {errorBlogs.message}
      </div>
    );
  }

  return (
    <section id="journey" className="section journey-section">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Journey</h2>
        <div className="space-y-8 flex items-center justify-center">
          {blogPosts.map((post) => (
            <div key={post._id} className="card">
              <h3 className="text-2xl font-semibold mb-2">
                <Link to={`/post/${post._id}`} className="link-style">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
