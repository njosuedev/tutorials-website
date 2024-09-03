import React from 'react';
import './Header.css'

export default function Header () {
  return (
    <header className="header">
      <nav>
        <a style={{marginRight:'auto'}} href="/">NJDev</a>
        <a href="/">Home</a>
        <a href="/">Ui Design</a>
        <a href="/">Websites</a>
        <a href="/">Web app</a>
        <a href="/">E-commerce</a>
        <a style={{marginLeft:'auto'}} href="/">Info</a>
      </nav>
    </header>
  );
};
