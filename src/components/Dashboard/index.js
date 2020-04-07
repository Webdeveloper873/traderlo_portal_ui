/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Icon, Row, Col } from 'antd';
import CountUp from 'react-countup';

//component
import PageWrapper from 'common/components/PageWrapper';
import Banner from 'common/components/Banner';
import UserSidebar from 'common/components/UserSidebar';

//actions
import { user } from 'appRedux/actions/user';

//styles
import classes from './styles.module.scss';


const cardDesign = {margin:15, backgroundColor:'pink', borderRadius:5, color: 'white', fontSize:15, fontWeight:700, height: 100}


const DashboardItem = ({count ,title}) => {
  return (
    <Card style={cardDesign}>
      <Row>
        <Col span={16}>
          <Row>
            <span>
              <CountUp
                start={0}
                end={count}
                duration={2.75}
                separator=","
              />
            </span>
          </Row>
          <Row style={{marginTop:5}}>
            <span>
             {title}
            </span>
          </Row>
        </Col>
        <Col span={8}>
          <span><Icon type="star" style={{ fontSize:120 }}  rotate={50}/></span>
        </Col>
      </Row>
    </Card>
  )
}

const Dashboards = ({...props}) => {
  const dispatch = useDispatch();
  const bannerPath = ['Home', 'Dashboard'];
  const isLoggedIn = useSelector(({user}) => user.isLoggedIn);

  useEffect(()=>{
    //this is initial login, fetch user profile
    console.log('dispatch userGetProfile');
    if(isLoggedIn){
      console.log('update when logged in')
      dispatch(user.getUserProfile());
    }
    dispatch(user.getUserProfile());
  }, [isLoggedIn]);


  return(
    <>
      <Banner text={'Dashboard'} path={bannerPath}/>
      <PageWrapper className={classes.pageWrapper}>
          <Col span={6} className={classes.userSidebar}>
            <UserSidebar></UserSidebar>
          </Col>

          <Col span={6}>
            <DashboardItem title ={' Total Posted Ads'} count={16578612}></DashboardItem>
          </Col>
          <Col span={6}>
            <DashboardItem title ={' Total Item Sold'} count={54678789}></DashboardItem>
          </Col>
          <Col span={6}>
          <DashboardItem title ={' Total Cancelled Ads'} count={1567523}></DashboardItem>
          </Col>
      </PageWrapper>
    </>
  )
}

export default Dashboards;