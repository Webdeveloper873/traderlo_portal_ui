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
import { listAndStatusCol } from './constants';

//styles
import classes from './styles.module.scss';

const SearchBid = () => {
  return(<Input addonAfter={<Icon type={'search'} />} size='large' />);
}

const ListingAndStatus = () => {
  const dispatch = useDispatch();
  const listingStatus = useSelector(({ sellingActivities }) => sellingActivities.listingStatus);
  const bannerPath = ['Dashboard', 'Selling Activities', 'Listing and Status'];

  const onEditListing = id => {
    dispatch(domainSelling.setListingId(id));
  }

  const onDeleteListing = id => {
    dispatch(sellingActivities.deleteSellListing({ id }));
  }

  useEffect(()=>{
    dispatch(sellingActivities.getListingStatus());
  }, []);

  return(
    <>
      <Banner text={'Listing And Status'} path={bannerPath}/>
      <PageWrapper addTopMargin>
        <Col xs={24} sm={24} md={6} lg={6} >
          <UserSidebar />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} className={classes.customPadding}>
          <Card type="inner" title={'Listing And Status'} extra={<SearchBid />} className={classes.tableContainer}>
            <Table dataSource={listingStatus}
              columns={listAndStatusCol(onEditListing, onDeleteListing)}
            />
          </Card>
        </Col>
      </PageWrapper>
    </>
  );
}

export default ListingAndStatus;