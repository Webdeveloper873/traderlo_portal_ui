/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Col, Card, Input, Icon, Table} from 'antd';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';
import OrderTracker from 'common/components/OrderTracker';

//actions
import { sellingActivities } from 'appRedux/actions/user';

//constants
import { columns } from './constants';

//styles
import classes from './styles.module.scss';

const SearchBid = () => {
  return(<Input addonAfter={<Icon type={'search'} />} size='large' />);
}

const CustomerOrders = () => {
  const sellOrders = useSelector(({ sellingActivities }) => sellingActivities.sellOrders);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(sellingActivities.getCstmrOrder());
  }, []);

  return(
    <>
     <Banner text={'Customers Orders'} />
      <PageWrapper addTopMargin>
        <Col xs={24} sm={24} md={6} lg={6} >
          <UserSidebar />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} className={classes.customPadding}>
          <Card type="inner" title={'Customers Orders'} extra={<SearchBid />} className={classes.tableContainer}>
            <Table
              columns={columns}
              dataSource={sellOrders}
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

export default CustomerOrders;