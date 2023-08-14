import React from "react";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  return (
    <div
      style={{
        width: "100%",
        overflow: "auto",
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      {images.map((item, index) => (
        <div key={index}>
          <img
            src={item}
            alt={`Slide ${index}`}
            style={{
              borderRadius: "10px",
              marginRight: "10px",
              height: "160px",
              width: "160px",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
