import React from "react";
import "./css/SFPButton.css";

const SFPButton = ({ text, styleName, link }) => {
  return (
    <button className={`SFPButton ${styleName}`}>
      <a href={link}>{text}</a>
    </button>
  );
};

export default SFPButton;
