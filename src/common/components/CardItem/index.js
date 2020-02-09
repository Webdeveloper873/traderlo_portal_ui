import React from 'react';
import { Card, Icon, Avatar } from 'antd';

//assets
import UserImgTemp from 'assets/user-img.jpg';
import WebsiteTemp from 'assets/tempImg/website.png';

//styles
import classes from './styles.module.scss';


const {Meta} = Card;

const CardsDesc = () => (
  <>
    <div>{'$1,234'}</div>
    <div>{'category'}</div>
    <div><Icon type="clock-circle" />{' Time Left'}</div>
  </>
)

const CardDisplay = () => {
  return(
    <Card className={classes.cardStyle}
      hoverable
      cover={<img alt="example" src={WebsiteTemp} />}
    >
      <Avatar size={52} src={UserImgTemp} className={classes.avatarStyle}/>
      <Meta title="Product Name" description={<CardsDesc />} />
    </Card>
  )
}

export default CardDisplay;