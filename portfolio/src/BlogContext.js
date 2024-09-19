import React, { createContext, useState, useEffect } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [errorBlogs, setErrorBlogs] = useState(null);

  useEffect(() => {
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
        setErrorBlogs(err);
      } finally {
        setLoadingBlogs(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <BlogContext.Provider value={{ blogPosts, loadingBlogs, errorBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};
