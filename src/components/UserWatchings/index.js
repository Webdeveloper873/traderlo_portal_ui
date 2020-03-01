import React from 'react';
import { Col, Card, Input, Icon, Table, Tabs } from 'antd';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';

//constants
import {domWebCol, sellersCol, favoritesCol} from './constants';

//styles
import classes from './styles.module.scss';


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}


const SearchBid = () => {
  return(<Input addonAfter={<Icon type={'search'} />} size='large' />);
}

const UserWatchings = () => {
  return(
    <>
      <Banner text={'Watchings'} />
      <PageWrapper addTopMargin>
        <Col xs={24} sm={24} md={6} lg={6} >
          <UserSidebar />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} className={classes.customPadding}>
          <Card type="inner" title={'Watching/Favorites'} extra={<SearchBid />} className={classes.tableContainer}>
            <Tabs defaultActiveKey="1" onChange={callback} tabBarGutter={250} size={'large'}>
            <TabPane tab="Domain/Websites" key="1">
              <Table columns={domWebCol} dataSource={[]}/>
            </TabPane>
            <TabPane tab="Favorites" key="2">
              <Table columns={favoritesCol} dataSource={[]}/>
            </TabPane>
            <TabPane tab="Sellers" key="3">
              <Table columns={sellersCol} dataSource={[]}/>
            </TabPane>
            </Tabs>
          </Card>
        </Col>
      </PageWrapper>
    </>
  );
}

export default UserWatchings;