import React from 'react';
import { Col, Card, Input, Icon, Table } from 'antd';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';

//constants
import { listAndStatusCol, sampleData} from './constants';

//styles
import classes from './styles.module.scss';

const SearchBid = () => {
  return(<Input addonAfter={<Icon type={'search'} />} size='large' />);
}

const ListingAndStatus = () => {
  return(
    <>
      <Banner text={'Listing And Status'} />
      <PageWrapper addTopMargin>
        <Col xs={24} sm={24} md={6} lg={6} >
          <UserSidebar />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} className={classes.customPadding}>
          <Card type="inner" title={'Listing And Status'} extra={<SearchBid />} className={classes.tableContainer}>
            <Table columns={listAndStatusCol} dataSource={sampleData}/>
          </Card>
        </Col>
      </PageWrapper>
    </>
  );
}

export default ListingAndStatus;