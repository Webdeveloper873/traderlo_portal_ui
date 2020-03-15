import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, Tabs, Icon, Input, Button, Divider, Modal } from 'antd';

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

//utils
import { useFormInput } from 'common/utils/hooks';

//assets
import BuyerProtection from 'assets/bidding/buyerprotection.png';
import TimeFrame from 'assets/bidding/timeframe.png';
import PaymentsImg from 'assets/bidding/payments.png';

//constants
import {responsiveConf} from 'common/constants';
import SimilarPost from './components/SimilarPost';

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
  const bid = useFormInput();
  const [buyNowVisible, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setShowModal(true);
  }

  const hideModal = () => {
    setShowModal(false);
  }

  const onBidNow = () => {
    const data = {
      amount: parseInt(bid.value),
      sellerId: 13, //TODO: change
      id: 352, //TODO: change
    };
    console.log('data', data);
    dispatch(bidDomain.setBid(data));
  }

  return(
    <Col xs={24} md={8}>
      <Card className={classes.rightPane}>
        <h4>Current price <span>Request for Reserve?</span></h4>
        <h4>{`$ ${domainDetails.startingPrice}`}</h4>
        <p><b>5</b>{` Bids`}<span><Icon type="clock-circle" />{` ${domainDetails.durationDate} Days Left`}</span></p>
        <Input addonAfter={<span onClick={onBidNow}>Bid Now</span>} placeholder='Enter Amount' />
        <Row className={classes.rowStyle} gutter={32} align='middle' type='flex'>
          <Col {...twoCol}>
            <Button className={classes.btnStyle} onClick={showModal}>{`Buy Now $${domainDetails.buyNowPrice}`}</Button>
          </Col>
          <Col {...twoCol}>
            <Button type='danger'>Add to Watch</Button>
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
        <Payments />
      </Modal>
    </Col>
  );
}

const DomainDetails = () => {
  const domainDetails = useSelector(({ buyDomain }) => buyDomain.selectedDomainInfo);
  return(
    <>
      <Banner text='Payment' />
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