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
    <section id="journey" className="section journey-section">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Journey</h2>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="card">
              <h3 className="text-2xl font-semibold mb-2">
                <Link to={`/post/${post.id}`} className="link-style">
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
