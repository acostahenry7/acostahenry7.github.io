import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";

export default function Banner(props) {
  const { images } = props;

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
      transitionTime={1000}
    >
      {images?.map((item) => (
        <div>
          <img src={item.img} />
        </div>
      ))}
    </Carousel>
  );
}
