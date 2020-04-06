/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Col, Card, Tabs, Row, Checkbox, Button, Avatar, Divider } from 'antd';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';

//styles
import classes from './styles.module.scss';


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const PublicProfile = () => {
  const bannerPath = ['Dashboard', 'My Profile and Account', 'User Profile'];

  return(
    <>
      <Banner text={'User Profile'} path={bannerPath}/>
      <PageWrapper addTopMargin>
        <Col xs={24} sm={24} md={24} lg={24} className={classes.customPadding}>
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