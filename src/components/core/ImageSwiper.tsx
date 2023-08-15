import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { HomeProps } from "../home/HomePage";

const CustomCarousel = styled(Carousel)`
  .carousel {
    z-index: 100 !important;
    overflow: visible;
  }
  .carousel-slider {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) !important;
  }
  .control-dots {
    bottom: -32px;
  }
  .li,
  .dot {
    background-color: #d9d9d9 !important;
    margin: 0 3px !important;
    height: 6px !important;
    width: 6px !important;
  }
  .dot.selected {
    background-color: #6a81aa !important;
  }
  padding-bottom: 20px;
`;

const ImageSwiper: React.FC<HomeProps> = ({ ...prop }) => {
  const listItems = prop.images.map((item) => (
    <div
      style={{
        paddingTop: "10px",
      }}
    >
      <img
        src={item}
        style={{
          width: "100%",
          height: "230px",
        }}
      />
    </div>
  ));
  return (
    <CustomCarousel
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      showThumbs={false}
      showStatus={false}
      showArrows={false}
    >
      {listItems}
    </CustomCarousel>
  );
};

export default ImageSwiper;
