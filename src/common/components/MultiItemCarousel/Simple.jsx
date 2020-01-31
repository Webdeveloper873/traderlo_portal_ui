import React from 'react';
import Carousel from "react-multi-carousel";
import { Image } from "react-bootstrap";

//assets
import ImageHolder from 'assets/main.jpg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
const images = [
  ImageHolder,
  ImageHolder,
  ImageHolder,
  ImageHolder,
  ImageHolder,
  ImageHolder,
  ImageHolder,
  ImageHolder,
  ImageHolder,
  ImageHolder,
  ImageHolder,
  ImageHolder,
  ImageHolder,
  ImageHolder,
  ImageHolder,
  ImageHolder,
  ImageHolder,
  ImageHolder,
  ImageHolder,
  ImageHolder,
  ImageHolder,
  ImageHolder,
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
      {images.slice(0, 15).map(image => {
        return (
          <Image
            draggable={false}
            style={{ width: '100px', height: '100px' }}
            src={image}
          />
        );
      })}
    </Carousel>
  );
};

export default Simple;
