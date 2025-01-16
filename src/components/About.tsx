import React from 'react';
import Navbar from './Navbar';

const About: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <Navbar />
      <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-red-500 mb-6">About Page</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        Welcome to the About Page! This application is designed to help you learn and grow your skills in a fun and engaging way.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        Here, you can explore different topics, dive deep into each section, and interact with the content. We hope you enjoy your learning journey!
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Features:</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        <li>Interactive tutorials</li>
        <li>Step-by-step guides</li>
        <li>Live demos and examples</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3">Get In Touch</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        If you have any questions or feedback, feel free to reach out to us. We’d love to hear from you!
      </p>
    </div>
  );
};

export default About;
