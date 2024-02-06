// React component
import React, { useState, useEffect } from "react";
import "./css/Nav.css"; // Make sure the CSS file is in the same directory as your component

const Nav = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (
      window.scrollY >
      window.innerHeight - document.querySelector(".navbar").offsetHeight
    ) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${sticky ? "sticky" : ""}`}>
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

export default Nav;
