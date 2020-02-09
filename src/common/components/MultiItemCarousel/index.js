import React from 'react';

//components
import Section from './Section';
import Simple from './Simple';

import "react-multi-carousel/lib/styles.css";

const MultiItemCarousel = () => {

  return(
    <Section>
      <Simple deviceType={'desktop'} />
    </Section>
  );
}

export default MultiItemCarousel;