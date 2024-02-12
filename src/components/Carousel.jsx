import React, { useState } from "react";
import "./css/Carousel.css"; // Import CSS for styling

// Carousel component
const Carousel = ({ images }) => {
  const [stack, setStack] = useState(images);

  const cycleImage = () => {
    const newStack = [...stack.slice(1), stack[0]];
    setStack(newStack);
  };

  return (
    <div className="carousel" onClick={cycleImage}>
      {stack.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className="stacked-image"
          style={{
            zIndex: stack.length - index, // Ensure the top image has the highest z-index
            // transform: `rotate(${Math.random() * 10 - 5}deg)`, // Apply random rotation between -5 and 5 degrees
            transform: `rotate(${Math.random() * 10 - 5}deg) translate(${
              Math.random() * 20 - 10
            }px, ${Math.random() * 20 - 10}px)`, // Random rotation and centered translation
            position: "absolute",
            top: `${index * 5}px`, // Offset each image slightly to create a stacked effect
            left: `${index * 5}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Carousel;
