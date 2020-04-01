/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Col, Card, Input, Icon, Table, Tabs, Row, Form, Checkbox, Button, Avatar, DatePicker, Radio, Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';

//constants
import { domWebCol, domWebData, sellersCol, favoritesCol} from './constants';

//styles
import classes from './styles.module.scss';


//actions
import { user } from 'appRedux/actions/user';

// util
import { openNotification } from 'common/utils/helpers';

const CheckboxGroup = Checkbox.Group;
const { TextArea } = Input;
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const PublicProfile = () => {

  const dispatch = useDispatch();
  // const userProfile = useSelector(({user}) => user.profile);
  // const updateUserSuccess = useSelector(({user}) => user.updateUserSuccess);
  // console.log(userProfile,'userProfile')

  // useEffect(()=>{
  //   dispatch(user.getUserProfile());
  // },[]);

  // useEffect(() =>{
  //   if (updateUserSuccess) {
  //     console.log(updateUserSuccess);
  //     setTimeout(() => {
  //       openNotification({status:'success', message:'user update success'});
  //     }, 500);
  //     dispatch(user.clearUserNotifStatus());
  //     dispatch(user.getUserProfile());
  //   }
  // })



  // const [firstName, setFirstName] = useState(userProfile.firstName);



  // const onChangeBirthdate = (date, dateString) => {
  //   console.log(date, dateString);
  //   setBirthDate(dateString);
  // }



  return(
    <>
      <Banner text={'User Profile'} />
      <PageWrapper addTopMargin>
        {/* <Col xs={24} sm={24} md={6} lg={6} >
          <UserSidebar />
        </Col> */}
        <Col xs={24} sm={24} md={24} lg={24} className={classes.customPadding}>
          {/* <Card type="inner" title={'User Profile'} className={classes.tableContainer}>
            asdsaddddasd
          </Card> */}
          <Row>
            <Card>
              <Col span={6}> <Avatar shape="square" size={230} icon='user' /></Col>
              <Col span={18} >
                <Card style={{backgroundColor:'#00bcd4', color:'white', paddingBottom:21}}>
                <Row><span style={{fontSize: 28}}>Name: User Sample</span></Row>
                <Row><span style={{fontSize: 18}}>Location: California</span></Row>
                <Divider />
                <Row><span>Active:</span></Row>
                <Row><span>Member Since:</span></Row>
                </Card>
              </Col>
            </Card>
          </Row>
          <Row>
            
            <Col span={6}>
              <Card>
                <span style={{fontSize: 16, fontWeight:700}}>Social media</span>
                <Divider style={{margin:5}}/>
                <Checkbox defaultChecked={false}>Facebook</Checkbox>
                <br />
                <Checkbox defaultChecked={false}>Twitter</Checkbox>
                <br />
                <Checkbox defaultChecked={false}>LinkedIn</Checkbox>
                <br />
                <Checkbox defaultChecked={false}>Instagram</Checkbox>
                <br />
                <br />
                <span style={{fontSize: 16, fontWeight:700}}>Verification</span>
                <Divider style={{margin:5}}/>
                <Checkbox defaultChecked={false}>Email Address</Checkbox>
                <br />
                <Checkbox defaultChecked={false}>Phone Number</Checkbox>
                <br />
                <br />
                <br />
                <span style={{fontSize: 16, fontWeight:700}}>Free Domain Auction History</span>
                <Divider style={{margin:5}}/>
                <span style={{fontSize: 14}}>1 Comment Placed</span>
                <br />
                <span style={{fontSize: 14}}>8 Bids Placed</span>
                <br />
                <span style={{fontSize: 14}}>7 Listings, 0% Sold</span>
              </Card>
              </Col>
            <Col span={18}>
              <Card style={{height: 350}}>
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="Listings" key="1">
                    Listings
                  </TabPane>
                  <TabPane tab="Feedback" key="2">
                    Feedback
                  </TabPane>
                </Tabs>
              </Card>
                <Row className={classes.btnContainer}>
                  <Button size='large' className={classes.btnStyle}>Watch Seller</Button>
                </Row>
            </Col>
          </Row>
        </Col>
      </PageWrapper>
    </>
  );
}

export default PublicProfile;