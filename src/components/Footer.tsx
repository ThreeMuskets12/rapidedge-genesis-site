import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-6 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} RapidEdge Solutions LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
