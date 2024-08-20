import React from 'react';

const Journey = () => {
  // Sample blog post
  const blogPosts = [
    {
      title: 'My Transition from an English teacher to a Software Developer',
      date: 'August 18, 2024',
      content: 'In this post, I share how I transitioned from a background in English Literature to becoming a Backend Developer...'
    }
  ];

  return (
    <section id="journey" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">My Journey</h2>
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.date}</p>
              <p className="text-gray-700">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
