import React from 'react';
import './Header.css'

export default function Header () {
  return (
    <header className="header">
      <nav>
        <a style={{marginRight:'auto'}} href="/">NJDev</a>
        <a href="/">Home</a>
        <a href="/projects">Ui Design</a>
        <a href="/projects">Websites</a>
        <a href="/projects">Web app</a>
        <a href="/projects">E-commerce</a>
        <a style={{marginLeft:'auto'}} href="/infome">Info</a>
      </nav>
    </header>
  );
};
