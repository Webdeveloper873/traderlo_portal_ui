/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Card, Table, Select } from 'antd';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';
import OrderTracker from 'common/components/OrderTracker';

import { buyActivities } from 'appRedux/actions/user';

//constants
import { myBidsCol } from './constants';

//styles
import classes from './styles.module.scss';

const { Option } = Select;

const SearchBid = () => {
  // return(<Input addonAfter={<Icon type={'search'} />} size='large' />);
  return(
    <Select style={{ width: 200 }} placeholder='Select Category'>
      <Option value="1">All</Option>
      <Option value="2">Templates</Option>
      <Option value="3">Clones</Option>
      <Option value="4">Plugins</Option>
    </Select>
  );
}

const UserOrders = () => {
  const orders = useSelector(({ buyActivities }) => buyActivities.myOrders);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(buyActivities.getUserOrders());
  }, [])

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
              dataSource={orders}
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