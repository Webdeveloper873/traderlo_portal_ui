import React from 'react';
import { Col } from 'antd';

//styles
import classes from '../styles.module.scss';

//constants
import { responsiveConf } from 'common/constants';

const {threeCol} = responsiveConf;

const CardItem = ({imgSrc, title}) => {
  return(
    <Col {...threeCol} className={classes.cardItem}>
      <img src={imgSrc} alt='...loading' />
      <br /><span className={classes.title}>{title}</span><br/>
      <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </span>
    </Col>
  )
}

export default CardItem;