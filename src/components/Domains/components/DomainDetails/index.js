/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, Tabs, Icon, Input, Button, Divider, Modal, notification } from 'antd';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import CardItem from './components/CardItem';
import SellerDetails from './components/SellerDetails';
import Payments from 'common/components/Payments'

//styles
import classes from './styles.module.scss';

//actions
import { bidDomain } from 'appRedux/actions/bidding';
import { user } from 'appRedux/actions/user';

//utils
import { useFormInput } from 'common/utils/hooks';

//assets
import BuyerProtection from 'assets/bidding/buyerprotection.png';
import TimeFrame from 'assets/bidding/timeframe.png';
import PaymentsImg from 'assets/bidding/payments.png';

//constants
import {responsiveConf} from 'common/constants';
import SimilarPost from './components/SimilarPost';


//actions
import { buyingDomain } from 'appRedux/actions/buying';


const {TabPane} = Tabs;
const {twoCol} = responsiveConf;

const LeftPane = (domainDetails) => {
  return(
    <Col xs={24} md={16}>
      <Card className={classes.cardStyle}>
        <h3>{domainDetails.appName}</h3>
        <Row clasName={classes.rowStyle} gutter={32}>
          <CardItem imgSrc={BuyerProtection} title={'Buyer Protection Guarantee'}/>
          <CardItem imgSrc={TimeFrame} title={'Time Frame'}/>
          <CardItem imgSrc={PaymentsImg} title={'Payments'}/>
        </Row>
      </Card>
      <Card className={classes.marginTop15}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Description" key="1">
            {domainDetails.description}
          </TabPane>
          <TabPane tab="Financials/Traffic" key="2">
            veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
          </TabPane>
          <TabPane tab="Comments" key="3">
            eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex. Exercitation mollit sit culpa nisi culpa non adipisicing alsoAmet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
          </TabPane>
        </Tabs>
      </Card>
    </Col>
  );
}

const RightPane = (domainDetails) => {
  const [buyNowVisible, setShowModal] = useState(false);
  const selectedDomainInfo = useSelector(({ buyDomain }) => buyDomain.selectedDomainInfo);
  const alreadyInWatchList = useSelector(({buyDomain}) => buyDomain.alreadyInWatchList);
  const bidFailed = useSelector(({ bidding }) => bidding.bidFailed);
  const bid = useFormInput();
  const dispatch = useDispatch();

  const showModal = () => {
    setShowModal(true);
  }

  const hideModal = () => {
    setShowModal(false);
  }

  const onClickAddToWatchlist = () => {
    console.log('clicked')
    dispatch(buyingDomain.addToWatchlist(domainDetails))
  }

  // const onClickRemoveToWatchlist = () => {
  //   console.log('clicked')
  //   dispatch(buyingDomain.removeToWatchlist(domainDetails))
  // }

  const onBidNow = () => {
    const { userId, id } = selectedDomainInfo || {};
    const data = {
      amount: parseInt(bid.value),
      sellerId: userId,
      id,
    };
    console.log('data', data);
    dispatch(bidDomain.setBid(data));
  }

  useEffect(()=>{
    if(bidFailed){
      notification.error({
        className: classes.notif,
        message: 'Bid Failed!',
        description: 'Please try again.',
      });
    }
    bid.reset();
    dispatch(bidDomain.resetBid());
  }, [bidFailed]);

  return(
    <Col xs={24} md={8}>
      <Card className={classes.rightPane}>
        <h4>Current price <span>Request for Reserve?</span></h4>
        <h4>{`$ ${domainDetails.startingPrice}`}</h4>
        <p><b>5</b>{` Bids`}<span><Icon type="clock-circle" />{` ${domainDetails.durationDate} Days Left`}</span></p>
        <Input onChange={bid.handleInputChange} addonAfter={<span onClick={onBidNow} className={classes.bidNowStyle}>Bid Now</span>} placeholder='Enter Amount' />
        <Row className={classes.rowStyle} gutter={32} align='middle' type='flex'>
          <Col {...twoCol}>
            <Button className={classes.btnStyle} onClick={showModal}>{`Buy Now $${domainDetails.buyNowPrice}`}</Button>
          </Col>
          <Col {...twoCol}>
            <Button key type='danger' onClick={() => onClickAddToWatchlist()}>{alreadyInWatchList? 'Already in Watchlist' : 'Add to Watchlist'}</Button>
            {/* {alreadyInWatchList ?
              <Button key type='primary' onClick={() => onClickAddToWatchlist()}>{'Add to Watchlist'}</Button>:
              <Button key type='danger' onClick={() => onClickRemoveToWatchlist()}>{'Remove to Watchlist'}</Button>} */}

          </Col>
        </Row>
      </Card>
      <Card className={classes.marginTop15}>
        <span className={classes.cardTitle}>Seller Details</span>
        <Divider className={classes.dividerStyle} />
        <SellerDetails />
      </Card>
      <Card className={classes.marginTop15}>
        <span className={classes.cardTitle}>Similar Domains</span>
        <Divider className={classes.dividerStyle} />
        <SimilarPost />
      </Card>

      <Modal destroyOnClose
        visible={buyNowVisible}
        onCancel = {hideModal}
        footer={null}>
        <Payments isAddOnly={false}/>
      </Modal>
    </Col>
  );
}

const DomainDetails = () => {
  const domainDetails = useSelector(({ buyDomain }) => buyDomain.selectedDomainInfo);
  const dispatch = useDispatch();
  const bannerPath = ['Home', 'Domains', 'Listing Details'];

  useEffect(()=>{
    //TODO: change
    const access_token = window.localStorage.getItem('access_token');
    if(access_token){
      dispatch(user.getSavedBanks());
      dispatch(user.getSavedCard());
    }
  }, []);

  return(
    <>
      <Banner text='Domain Keyword' path={bannerPath}/>
      <PageWrapper>
        <Row className={classes.rowStyle} gutter={16}>
          <LeftPane {...domainDetails}/>
          <RightPane {...domainDetails}/>
        </Row>
      </PageWrapper>
    </>
  );
}

export default DomainDetails;