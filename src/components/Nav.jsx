// React component
import React from "react";
import "./css/Nav.css"; // Make sure the CSS file is in the same directory as your component

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <nav>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#donate">Donate</a>
      </nav>
    </div>
  );
};

export default Navbar;
