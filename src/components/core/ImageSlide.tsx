import { useState } from "react";

export default function ImageSlider({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          maxHeight: "395px", // 원하는 높이로 설정
          maxWidth: "500px", // 원하는 너비로 설정
          marginTop: "13px",
          justifyContent: "center",
          position: "relative",
          boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.6)",
        }}
      >
        <button
          style={{
            position: "absolute",
            top: "50%",
            left: "0%",
            border: "none",
            transform: "translateY(-50%)",
            background: "none",
            fontSize: "16px",
            cursor: "pointer",
            zIndex: "1",
          }}
          onClick={prevSlide}
        >
          <img
            src="../../assets/images/Category_right_icon.png"
            style={{
              transform: "scaleX(-1)",
              width: "50%",
              height: "50%",
            }}
          />
        </button>
        <div
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              width: `${items.length * 100}%`, // 슬라이더 전체 너비 조정
              transition: "transform 0.3s ease-in-out",
              transform: `translateX(-${(currentIndex * 100) / items.length}%)`, // 각 이미지의 너비 조정
            }}
          >
            {items.map((image, index) => (
              <div key={index} style={{ width: `${100 / items.length}%` }}>
                {" "}
                {/* 각 이미지 컨테이너의 너비 조정 */}
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={image.image}
                  alt={`Slide ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          style={{
            position: "absolute",
            right: "0%",
            top: "50%",
            border: "none",
            transform: "translateY(-50%)",
            background: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={nextSlide}
        >
          <img
            src="../../assets/images/Category_right_icon.png"
            style={{
              width: "50%",
              height: "50%",
            }}
          />
        </button>
      </div>
    </div>
  );
}
