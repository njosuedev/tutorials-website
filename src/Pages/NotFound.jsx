// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="not-found">
      <h2>404</h2>
      <p>Page Not Found</p>
      <Link to="/">Go to Home</Link>
    </main>
  );
};

export default NotFound;
