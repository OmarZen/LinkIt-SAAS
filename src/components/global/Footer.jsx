// Footer.jsx
'use client'
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold">About Us</h2>
            <p className="mt-2">
              We are a team of passionate individuals committed to bringing you the best experience.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <p className="mt-2">1234 Street Name, City, State, 12345</p>
            <p className="mt-2">Email: info@example.com</p>
            <p className="mt-2">Phone: (123) 456-7890</p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
