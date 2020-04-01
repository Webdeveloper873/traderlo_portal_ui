import React from 'react';
import {Col, Card, Input, Icon, Table} from 'antd';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';
import OrderTracker from 'common/components/OrderTracker';

//constants
import { columns, sampleData } from './constants';

//styles
import classes from './styles.module.scss';

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
          <Card type="inner" title={'Customers Orders'} extra={<SearchBid />} className={classes.tableContainer}>
            <Table
              columns={columns}
              dataSource={sampleData}
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