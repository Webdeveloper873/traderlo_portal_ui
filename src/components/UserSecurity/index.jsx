/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Col, Tabs } from 'antd';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';
import PassAndSecurity from './components/PassAndSecurity';
import EmailSettings from './components/EmailSettings';

//actions

//styles
import classes from './styles.module.scss';

const { TabPane } = Tabs;

const UserSecurity = () => {
  const bannerPath = ['Dashboard', 'My Profile and Account', 'Password and Security'];
  return(
    <>
      <Banner text={'Account and Security'} path={bannerPath}/>
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
              <EmailSettings />
            </TabPane>
          </Tabs>,
        </Col>
      </PageWrapper>
    </>
  );
}

export default UserSecurity;