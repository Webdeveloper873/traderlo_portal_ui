import React from 'react';
import moment from 'moment';
import { Card, Icon, Avatar } from 'antd';

//assets
import UserImgTemp from 'assets/user-img.jpg';
import WebsiteTemp from 'assets/tempImg/website.png';

//styles
import classes from './styles.module.scss';


const {Meta} = Card;

const CardsDesc = ({...props}) => {

  return (
    <>
      <div><span style={{fontWeight:700}}>{`$ ${props.startingPrice}`}</span></div>
      <div><span style={{fontWeight:600}}> {`Category: ${props.category? props.category.listingTypeName : ''}`}</span></div>
      <div>{`Description: ${props.category? props.category.description : ''}`}</div>
      <div><Icon type="clock-circle" />{`Time Left: ${props.durationDate} Days`}</div>
    </>
  )
}

const CardDisplay = ({...props}) => {
  console.log(props,'props');
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

export default CardDisplay;