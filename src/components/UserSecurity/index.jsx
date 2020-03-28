/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Tabs } from 'antd';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';
import PassAndSecurity from './components/PassAndSecurity';

//actions

//styles
import classes from './styles.module.scss';

const { TabPane } = Tabs;

const UserSecurity = () => {
  return(
    <>
      <Banner text={'Bids'} />
      <PageWrapper addTopMargin>
        <Col xs={24} sm={24} md={6} lg={6} >
          <UserSidebar />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} className={classes.customPadding}>
          <Tabs defaultActiveKey=''>
            <TabPane tab={`Password & Security`} key="1">
              <PassAndSecurity />
            </TabPane>
            <TabPane tab={`Email Notification Settings`} key="2">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>,
        </Col>
      </PageWrapper>
    </>
  );
}

export default UserSecurity;