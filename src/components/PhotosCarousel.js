/* eslint-disable react/prop-types */

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function PhotosCarousel({ photos }) {
  return (
    <Carousel>
      {photos.map((url) => (
        <div>
          <img src={url} alt="" />
        </div>
      ))}
    </Carousel>
  );
}

export default PhotosCarousel;
