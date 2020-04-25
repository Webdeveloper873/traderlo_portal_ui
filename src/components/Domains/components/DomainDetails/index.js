/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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


const { TabPane } = Tabs;
const { TextArea } = Input;
const { twoCol } = responsiveConf;

const LeftPane = (domainDetails) => {
  return(
    <Col xs={24} md={16}>
      <Card className={classes.cardStyle}>
        <h3>{domainDetails.appName}</h3>
        <Row clasName={classes.rowStyle} gutter={12}>
          <CardItem imgSrc={BuyerProtection} title={'Buyer Protection Guarantee'}/>
          <CardItem imgSrc={TimeFrame} title={'Time Frame'}/>
          <CardItem imgSrc={PaymentsImg} title={'Payments'}/>
        </Row>
      </Card>
      <Card className={classes.marginTop15}>
        <Tabs defaultActiveKey="1" className={classes.tabStyle}>
          <TabPane tab="Description" key="1">
            <div className={classes.boldLabel}>Description Heading</div>
            <p className={classes.marginTop15}>{domainDetails.description}</p>
          </TabPane>
          <TabPane tab="Financials/Traffic" key="2">
            veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
          </TabPane>
          <TabPane tab="Comments" key="3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            <div className={`${classes.boldLabel} ${classes.marginTop15}`}>Comments</div>
            <TextArea className={classes.marginTop15} rows={6} />
            <Button className={classes.commentSubmit} size='large'>Submit</Button>
          </TabPane>
        </Tabs>
      </Card>
      <Card className={classes.report}>
        <div className={classes.boldLabel}>Report</div>
        <p className={classes.marginTop15}>{`Does this listing violate the Free Domain Auction `}<span className={classes.blueLink}>Terms and Conditions</span>{`?`}</p>
        <p className={classes.marginTop15}>{`If so, anonymously `}<span className={classes.blueLink}>report it here</span>{`.`}</p>
      </Card>
    </Col>
  );
}

const RightPane = (domainDetails) => {
  const [buyNowVisible, setShowModal] = useState(false);
  const selectedDomainInfo = useSelector(({ buyDomain }) => buyDomain.selectedDomainInfo);
  const bidFailed = useSelector(({ bidding }) => bidding.bidFailed);
  const bid = useFormInput();
  const dispatch = useDispatch();
  const { user, id, isWatched } = selectedDomainInfo || {};
  const alreadyInWatchList = isWatched === 'y' ? true : false;
  const { reservePrice } = domainDetails || {};

  const showModal = () => {
    setShowModal(true);
  }

  const hideModal = () => {
    setShowModal(false);
  }

  const onClickAddToWatchlist = () => {
    dispatch(buyingDomain.addToWatchlist(domainDetails));
  }

  // const onClickRemoveToWatchlist = () => {
  //   console.log('clicked')
  //   dispatch(buyingDomain.removeToWatchlist(domainDetails))
  // }

  const onBidNow = () => {
    const data = {
      amount: parseInt(bid.value),
      sellerId: user && user.id ? user.id : '',
      id,
    };
    console.log('data', data);
    dispatch(bidDomain.setBid(data));
  }

  const onClickWatch = () => {
    dispatch(buyingDomain.addToWatchlist({
      listType: 's',
      id: user && user.id ? user.id : '',
    }));
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
        <h4 className={classes.boldLabel}>
          Current Bid
          {reservePrice ? <span>Request for Reserve?</span> : null}
        </h4>
        <h4 className={`${classes.boldLabel} ${classes.currBid}`}>{`$${domainDetails.startingPrice}`}</h4>
        <p><b>5</b>{` Bids`}<Row type="flex" style={{alignItems: 'center', marginLeft:3}}> <Icon type="clock-circle" style={{marginRight:10}}/>{`${domainDetails.durationDate} Days Left`}</Row></p>
        <Input size='large' onChange={bid.handleInputChange} addonAfter={<span onClick={onBidNow} className={classes.bidNowStyle}>Bid Now</span>} placeholder='Enter Amount' />
        <Row className={classes.rowStyle} gutter={24}>
          <Col {...twoCol}>
            <Button size='large'
              className={classes.btnStyle}
              onClick={showModal}
              disabled={domainDetails.buyNowPrice ? false : true}
            >
              {`Buy Now${domainDetails.buyNowPrice ? ` $${domainDetails.buyNowPrice}` : ''}`}
            </Button>
          </Col>
          <Col {...twoCol}>
            <Button size='large' key className={classes.traderloPink} onClick={() => onClickAddToWatchlist()}>{alreadyInWatchList? 'Already in Watchlist' : 'Add to Watchlist'}</Button>
            {/* {alreadyInWatchList ?
              <Button key type='primary' onClick={() => onClickAddToWatchlist()}>{'Add to Watchlist'}</Button>:
              <Button key type='danger' onClick={() => onClickRemoveToWatchlist()}>{'Remove to Watchlist'}</Button>} */}
          </Col>
        </Row>
      </Card>
      <Card className={classes.marginTop15}>
        <Row justify='space-between' type='flex'>
          <Col span={12}>
            <span className={classes.boldLabel}>Seller Details</span>
          </Col>
          <Col span={12}>
            <Link className={classes.chatCol} to={`/user/chat/${user && user.id ? user.id : ''}`} >
              <Icon type="message" theme='twoTone' className={classes.messageIcon} />
              <span className={classes.chat}>CHAT</span>
            </Link>
          </Col>
        </Row>
        <Divider className={classes.dividerStyle} />
        <SellerDetails onClickWatch={onClickWatch} domainDetails={domainDetails} />
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
      <Banner text={domainDetails.keyword || 'Domain'} path={bannerPath}/>
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