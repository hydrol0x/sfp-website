import React from "react";
import "./css/SFPButton.css";

const SFPButton = ({ text, styleName }) => {
  return <button className={`SFPButton ${styleName}`}>{text}</button>;
};

export default SFPButton;
