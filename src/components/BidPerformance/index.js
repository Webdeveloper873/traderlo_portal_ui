import React from 'react';
import { Col, Card, Input, Icon, Table } from 'antd';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';

//constants
import { bidPerfCol, sampleData } from './constants';

//styles
import classes from './styles.module.scss';



const SearchBid = () => {
  return(<Input addonAfter={<Icon type={'search'} />} size='large' />);
}

const BidPerformance = () => {
  return(
    <>
      <Banner text={'Bids Performance'} />
      <PageWrapper addTopMargin>
        <Col xs={24} sm={24} md={6} lg={6} >
          <UserSidebar />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} className={classes.customPadding}>
          <Card type="inner" title={'Bids Performance'} extra={<SearchBid />} className={classes.tableContainer}>
            <Table columns={bidPerfCol} dataSource={sampleData}/>
          </Card>
        </Col>
      </PageWrapper>
    </>
  );
}

export default BidPerformance;