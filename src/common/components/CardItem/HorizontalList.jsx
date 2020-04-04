import React from 'react';
import { Icon, Row, Col } from 'antd';

//assets
import WebsiteTemp from 'assets/tempImg/website.png';

//styles
import classes from './styles.module.scss';

const HorizontalList = ({...props}) => {
  const { durationDate, appName, startingPrice, buyNowPrice } = props || {};
  
  return(
    <Row className={classes.horizontalList} {...props}>
      <Col span={5} className={classes.leftCol}>
        <img alt="example" src={WebsiteTemp} className={classes.imgStyle} />
      </Col>
      <Col span={7} className={`${classes.colStyle}`}>
        <span className={classes.boldLabel}>{appName}</span>
        <div>Current Top Bid: <span className={classes.boldLabel}>{`$${startingPrice}`}</span></div>
      </Col>
      <Col span={7} className={`${classes.colStyle}`}>
        Buy Now Price: <span className={classes.boldLabel}>{`$${buyNowPrice}`}</span>
        <div><Icon type="clock-circle" />{`${durationDate} Days left`}</div>
      </Col>
      <Col span={5} className={`${classes.rightCol} ${classes.colStyle}`}>
        Category
        <div><Icon type="eye" /></div>
      </Col>
    </Row>
  )
}

export default HorizontalList;