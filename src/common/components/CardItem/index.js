import React from 'react';
import { Card, Icon, Avatar } from 'antd';

//components
import HorizontalList from './HorizontalList';

//assets
import UserImgTemp from 'assets/user-img.jpg';
import WebsiteTemp from 'assets/tempImg/website.png';

//styles
import classes from './styles.module.scss';

const { Meta } = Card;

const CardsDesc = ({...props}) => {
  const { startingPrice, buyNowPrice, durationDate } = props || {};

  return (
    <>
      <div><span style={{fontWeight:700}}>{`Current Top Bid: $${startingPrice}`}</span></div>
      <div><span style={{fontWeight:600}}> {`Buy Now Price: $${buyNowPrice}`}</span></div>
      <div><Icon type="clock-circle" />{`Time Left: ${durationDate} Days`}</div>
    </>
  )
}

const CardDisplay = ({...props}) => {
  console.log('cardDisplay props', props);
  return(
    <Card className={classes.cardStyle}
      hoverable
      cover={<img alt="example" src={WebsiteTemp} />}
      {...props}
    >
      <Avatar size={52} src={props.image? props.image : UserImgTemp} className={classes.avatarStyle}/>
      <Meta title={props.appName} description={<CardsDesc {...props}/>} />
    </Card>
  )
}

CardDisplay.HorizontalList = HorizontalList;

export default CardDisplay;