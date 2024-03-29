/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Card, Input, Icon, Table } from 'antd';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';

//actions
import { buyActivities } from 'appRedux/actions/user';

//constants
import { myBidsCol } from './constants';

//styles
import classes from './styles.module.scss';

const SearchBid = () => {
  return(
    <Input size='large'
      addonAfter={<Icon type={'search'} />}
      placeholder='Search Bid'
    />
  );
}

const UserBids = () => {
  const bids = useSelector(({ buyActivities })=> buyActivities.myBids);
  const dispatch = useDispatch();
  const bannerPath = ['Dashboard', 'Buying Activities', 'My Bids'];

  useEffect(()=>{
    //fetch bids
    console.log('useEffect getUserBids');
    dispatch(buyActivities.getUserBids());
  }, []);

  return(
    <>
      <Banner text={'Bids'} path={bannerPath}/>
      <PageWrapper addTopMargin>
        <Col xs={24} sm={24} md={6} lg={6} >
          <UserSidebar />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} className={classes.customPadding}>
          <Card type="inner" title={'My Bids'} extra={<SearchBid />} className={classes.tableContainer}>
            <Table columns={myBidsCol} dataSource={bids}/>
          </Card>
        </Col>
      </PageWrapper>
    </>
  );
}

export default UserBids;