import React from 'react';
import { List, Avatar, Card, Icon, Button, Row, Col } from 'antd';

//styles
import classes from '../styles.module.scss';

const Description = () => {
  return(
    <>
      <span>Status:</span>
      <div className={classes.online}></div>
      <span>Online</span>
      <div>Member since: Jun 27, 2019</div>
    </>
  );
}

const SellerDetails = () => {
  return(
    <>
      <List.Item key={1}>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{'item.name.last'}</a>}
          description={<Description />}
        />
      </List.Item>
      <Card className={`${classes.sellerDetailsCard} ${classes.phoneNumberCard}`}>
        <Icon type="lock" className={classes.padlock}/>
        <span className={classes.number}>(+1) 234 677 8899</span>
        <span className={classes.showNumber}>Click to Reveal Phone No.</span>
      </Card>
      <Card className={`${classes.sellerDetailsCard} ${classes.addressCard}`}>
        <Icon type="pushpin" className={classes.padlock} />
        <span className={classes.number}>ManChester, Uk</span>
      </Card>
      <Row justify='space-between' className={classes.rowStyle} type='flex'>
        <Col span={12}>
          <Button type='primary'>View All Listings</Button>
        </Col>
        <Col span={12}>
          <Icon type="message" theme='twoTone' className={classes.messageIcon}/>
          <span className={classes.chat}>CHAT</span>
        </Col>
      </Row>
    </>
  );
}

export default SellerDetails;