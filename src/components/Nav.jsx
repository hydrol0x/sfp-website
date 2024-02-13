// React component
import React from "react";
import "./css/Nav.css"; // Make sure the CSS file is in the same directory as your component

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://github.com/hydrol0x/sfp-website/assets/34951139/fb4b2742-ae69-4b24-b1e8-76a8c6faf698"
          height={50}
        />
      </div>
      <nav className="nav-links">
        <a href="#events">Events</a>
        <a href="#about">About</a>
        {/* <a href="#donate">Donate</a>
        <a href="#contact">Contact</a> */}
      </nav>
    </div>
  );
};

export default Navbar;
