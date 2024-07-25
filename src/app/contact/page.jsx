'use client'
import { useState } from 'react';
import Head from 'next/head';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      number: '',
      message: '',
    });
    setTimeout(() => setIsSubmitted(false), 3000); // Hide popup after 3 seconds
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-white mt-4">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white mt-10">
          <h2 className="text-4xl font-semibold text-center mb-4 text-black">Get in touch</h2>
          <div>
            <p className='text-center'>
            Whether you are a seller or buyer looking to multiply your business, or someone who simply shares our passion for transformation
            </p>
          </div>
          <div>
            <h2 className='text-center font-semibold  text-green-500 mt-2'>
            we'd love to hear from you
            </h2>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="number"
              placeholder="Number"
              value={formData.number}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
          </div>
          <div className="text-center ">
            <button type="submit" className="w-full px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-200">
              Send
            </button>
          </div>
        </form>
        {isSubmitted && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 transition-opacity duration-200">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-green-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.293 6.293a1 1 0 011.414 0L9 11.586V4a1 1 0 012 0v7.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" />
              </svg>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Thank you for reaching out!</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
