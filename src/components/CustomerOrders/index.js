import React from 'react';
import {Col, Row, Card, Input, Icon,} from 'antd';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';


//styles
import classes from './styles.module.scss';

//styles
import Orders from './Orders';
// ** Header Col must same with the Orders Col ***

const Headers = () => {
  return (
    <Card>
     <Row>
        <Col span={3}>
          <h6>Order Id </h6>
        </Col>
        <Col span={7}>
          <h6>Name</h6>
        </Col>
        <Col span={4}>
          <h6>Purchase Price </h6>
        </Col>
        <Col span={4}>
          <h6>Order On </h6>
        </Col>
        <Col span={3}>
          <h6>Invoice</h6>
        </Col>
        <Col span={3}>
          <h6>Order Status</h6>
        </Col>
      </Row>
    </Card>
  )
}

const SearchBid = () => {
  return(<Input addonAfter={<Icon type={'search'} />} size='large' />);
}

const CustomerOrders = () => {
  return(
    <>
     <Banner text={'Customers Orders'} />
      <PageWrapper addTopMargin>
        <Col xs={24} sm={24} md={6} lg={6} >
          <UserSidebar />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} className={classes.customPadding}>
          <Card  type="inner" title={'Customers Orders'} extra={<SearchBid />} className={classes.tableContainer}>
            <h5>My Orders</h5>
            <Headers></Headers>
            <Orders></Orders>
          </Card>
        </Col>
      </PageWrapper>
    </>
  );
}

export default CustomerOrders;