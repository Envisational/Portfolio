import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import blogPosts from '../data/blogPost';

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  useEffect(() => {
    gsap.fromTo(
      '.journey-section',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: '.journey-section',
          start: 'top 75%',
        },
      }
    );
  }, []);

  return (
    <section id="journey" className="py-20 bg-gray-100 journey-section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">My Journey</h2>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">
                <Link to={`/post/${post.id}`} className="text-blue-500 hover:text-blue-700">
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
