import React, { useState } from 'react';
import { Col, Card, Input, Icon, Table } from 'antd';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';
import OrderTracker from 'common/components/OrderTracker';

//constants
import { myBidsCol, tempData } from './constants';

//styles
import classes from './styles.module.scss';

const SearchBid = () => {
  return(<Input addonAfter={<Icon type={'search'} />} size='large' />);
}

const UserOrders = () => {

  return(
    <>
      <Banner text={'My Orders'} />
      <PageWrapper addTopMargin>
        <Col xs={24} sm={24} md={6} lg={6} >
          <UserSidebar />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} className={classes.customPadding}>
          <Card type="inner" title={'My Orders'} extra={<SearchBid />} className={classes.tableContainer}>
            <Table
              columns={myBidsCol}
              dataSource={tempData}
              expandedRowRender={record => <OrderTracker />}
              expandIconColumnIndex={5}
              expandIconAsCell={false}
            />
          </Card>
        </Col>
      </PageWrapper>
    </>
  );
}

export default UserOrders;