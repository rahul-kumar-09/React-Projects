import React, { useState } from "react";
import "./App.css";

const ImageSlider = () => {
  const images = [
    "https://picsum.photos/id/1025/1000/500",
    "https://picsum.photos/id/1026/1000/500",
    "https://picsum.photos/id/1027/1000/500",
    "https://picsum.photos/id/1029/1000/500",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="slide"
      />

      <div className="navigation">
        <button onClick={goPrev} className="prevButton">
          Prev
        </button>
        <button onClick={goNext} className="nextButton">
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
