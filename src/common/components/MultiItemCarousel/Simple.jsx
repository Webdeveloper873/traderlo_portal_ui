import React from 'react';
import Carousel from "react-multi-carousel";
import { Avatar } from 'antd';

//assets
import Iconer from 'assets/tempImg/iconer.jpg';

//styles
import classes from './styles.module.scss';

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
  Iconer,
  Iconer,
  Iconer,
  Iconer,
  Iconer,
  Iconer,
  Iconer,
  Iconer,
  Iconer,
  Iconer,
  Iconer,
  Iconer,
  Iconer,
  Iconer,
  Iconer,
  Iconer,
  Iconer,
  Iconer,
  Iconer,
  Iconer,
  Iconer,
  Iconer,
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.

const CarouselItem = ({imgSrc}) => {
  return(
    <div className={classes.item}>
      <Avatar size={64} src={imgSrc} className={`${classes.inlineItem} ${classes.imgStyle}`}/>
      <div className={classes.inlineItem}>
        <h5>This is a title</h5>
        <p>This is Info</p>
      </div>
    </div>
  );
}

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
          <CarouselItem imgSrc={image}/>
        );
      })}
    </Carousel>
  );
};

export default Simple;
