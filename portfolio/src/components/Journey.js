import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

    // Fetch blog posts from the backend
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
  }, []);

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
