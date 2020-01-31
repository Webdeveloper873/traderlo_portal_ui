import React from 'react';

//components
import Section from './Section';
import Simple from './Simple';

import "react-multi-carousel/lib/styles.css";
import './styles.scss'

const MultiItemCarousel = () => {

  return(
    <Section className='mic-width'>
      <Simple deviceType={'desktop'} />
    </Section>
  );
}

export default MultiItemCarousel;