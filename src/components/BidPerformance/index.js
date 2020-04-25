/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Card, Input, Icon, Table } from 'antd';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';

//actions
import { sellingActivities } from 'appRedux/actions/user';
import { domain as domainSelling } from 'appRedux/actions/selling';

//constants
import { bidPerfCol } from './constants';

//styles
import classes from './styles.module.scss';

const SearchBid = () => {
  return (
    <Input size='large'
      addonAfter={<Icon type={'search'} />}
      placeholder='Search Bid'
    />
  );
}

const BidPerformance = () => {
  const dispatch = useDispatch();
  const bidsPerf = useSelector(({ sellingActivities }) => sellingActivities.bidsPerf);
  const bannerPath = ['Dashboard', 'Selling Activities', 'Bids Performance'];

  const onEditListing = id => {
    dispatch(domainSelling.setListingId(id));
  }

  const onDeleteListing = id => {
    dispatch(sellingActivities.deleteSellListing({ id, isBidPerf: true }));
  }

  useEffect(()=>{
    dispatch(sellingActivities.getBidsPerf());
  }, []);

  return(
    <>
      <Banner text={'Bids Performance'} path={bannerPath} />
      <PageWrapper addTopMargin>
        <Col xs={24} sm={24} md={6} lg={6} >
          <UserSidebar />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} className={classes.customPadding}>
          <Card type="inner" title={'Bids Performance'} extra={<SearchBid />} className={classes.tableContainer}>
            <Table dataSource={bidsPerf}
              columns={bidPerfCol(onEditListing, onDeleteListing)}
            />
          </Card>
        </Col>
      </PageWrapper>
    </>
  );
}

export default BidPerformance;