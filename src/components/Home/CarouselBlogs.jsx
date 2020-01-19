import React from 'react';
import {Carousel} from 'react-bootstrap';

//styles
import classes from './styles.module.scss';

//assets
import ImageHolder from 'assets/main.jpg';

const CarouselBlogs = () => {
  return(
    <Carousel className={classes.carousel}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          alt="First slide"
          src= {ImageHolder}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ImageHolder}
          alt="Third slide"
          />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ImageHolder}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBlogs;