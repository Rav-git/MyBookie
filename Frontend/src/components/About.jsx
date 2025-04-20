import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto pt-24 px-4 md:px-8 min-h-screen">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">About Us</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Our Story</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Welcome to BookStore, your premier destination for educational resources in technology and programming. 
              Founded in 2023, we set out with a simple mission: to make quality learning materials accessible to everyone.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              What started as a small collection of programming books has grown into a comprehensive
              library spanning various technology domains - from web development and mobile applications
              to cybersecurity and artificial intelligence.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              At BookStore, we believe knowledge should be accessible to all. Our mission is to:
            </p>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li className="mb-2">Provide free educational resources for beginners</li>
              <li className="mb-2">Offer premium, in-depth content for advanced learners</li>
              <li className="mb-2">Keep our materials up-to-date with the latest technologies</li>
              <li>Build a community of lifelong learners</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center dark:text-white">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-5 border rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="text-3xl text-blue-500 mb-2">🔍</div>
              <h3 className="text-xl font-medium mb-2 dark:text-white">Quality</h3>
              <p className="text-gray-600 dark:text-gray-400">We curate only the best educational content from trusted authors.</p>
            </div>
            <div className="p-5 border rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="text-3xl text-blue-500 mb-2">🌱</div>
              <h3 className="text-xl font-medium mb-2 dark:text-white">Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-400">We believe in making education accessible to everyone, regardless of background.</p>
            </div>
            <div className="p-5 border rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="text-3xl text-blue-500 mb-2">🚀</div>
              <h3 className="text-xl font-medium mb-2 dark:text-white">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">We continuously update our catalog to reflect the latest in technology.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center dark:text-white">Join Our Community</h2>
          <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
            Become part of our growing community of learners and tech enthusiasts. 
            Register for an account to access our premium content and join the discussion.
          </p>
          <div className="text-center">
            <a 
              href="/signup" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Sign Up Today
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About; 