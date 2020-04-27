/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { List, Avatar, Card, Icon, Button, Row, Col } from 'antd';
import moment from 'moment';

//actions
import { chat } from 'appRedux/actions/user';

//styles
import classes from '../styles.module.scss';

//utils
import { responsiveConf } from 'common/constants';
import { hideContactNo } from 'common/utils/helpers';

const { twoCol } = responsiveConf;

const Description = ({ user }) => {
  const isOnline = useSelector(({ chat }) => chat.isOnline);
  const { createdDate } = user || {};

  return(
    <>
      <span>Status:</span>
      <div className={`${classes.status} ${isOnline ? classes.online : classes.offline}`}></div>
      <span>{isOnline ? 'Online' : 'Offline'}</span>
      <div>{`Member since: ${moment(createdDate).format('LL')}`}</div>
    </>
  );
}

const SellerDetails = ({ onClickWatch, domainDetails }) => {
  const [hideContact, setHideContact] = useState(true);
  const dispatch = useDispatch();
  const { user } = domainDetails || {};
  const { id, firstName, lastName, contactNo, address, profileImage } = user || {};

  const revealPhoneNo = () => {
    setHideContact(false);
  }

  useEffect(()=>{
    dispatch(chat.getOnlineStatus({ id }));
  }, []);

  console.log('sellerdetails user: ', user);
  return(
    <>
      <List.Item key={1}>
        <List.Item.Meta
          avatar={<Avatar src={profileImage || "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" }/>}
          title={<a href="/">{`${firstName} ${lastName || ''}`}</a>}
          description={<Description user={user}/>}
        />
      </List.Item>
      {contactNo ? <Card className={`${classes.sellerDetailsCard} ${classes.phoneNumberCard}`}>
        <Icon type="lock" className={classes.padlock}/>
        <span className={classes.number}>{hideContact ? hideContactNo(contactNo) : contactNo}</span>
        <span className={classes.showNumber}
          onClick={revealPhoneNo}
        >
          Click to Reveal Phone No.
          </span>
      </Card> : null}
      {address ? <Card className={`${classes.sellerDetailsCard} ${classes.addressCard}`}>
        <Icon type="pushpin" className={classes.padlock} />
        <span className={classes.number}>ManChester, Uk</span>
      </Card> : null}
      <Row className={classes.rowStyle} gutter={24}>
        <Col {...twoCol}>
          <Link to={'/domains'}>
            <Button size='large' className={classes.btnStyle}>View All Listings</Button>
          </Link>
        </Col>
        <Col {...twoCol}>
          <Button size='large' key className={classes.traderloPink} onClick={onClickWatch}>Watch</Button>
        </Col>
      </Row>
    </>
  );
}

export default SellerDetails;