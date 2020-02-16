import React from 'react';
import { Row, Col, Card, Tabs, Icon, Input, Button } from 'antd';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import CardItem from './components/CardItem';

//styles
import classes from './styles.module.scss';

//assets
import BuyerProtection from 'assets/bidding/buyerprotection.png';
import TimeFrame from 'assets/bidding/timeframe.png';
import Payments from 'assets/bidding/payments.png';

//constants
import {responsiveConf} from 'common/constants';

const {TabPane} = Tabs;
const {twoCol} = responsiveConf;

const LeftPane = () => {
  return(
    <Col xs={24} md={16}>
      <Card className={classes.cardStyle}>
        <h3>Domain Name</h3>
        <Row clasName={classes.rowStyle} gutter={32}>
          <CardItem imgSrc={BuyerProtection} title={'Buyer Protection Guarantee'}/>
          <CardItem imgSrc={TimeFrame} title={'Time Frame'}/>
          <CardItem imgSrc={Payments} title={'Payments'}/>
        </Row>
      </Card>
      <Card className={classes.marginTop15}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Description" key="1">
            Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
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

const RightPane = () => {
  return(
    <Col xs={24} md={8}>
      <Card className={classes.rightPane}>
        <h4>Current price <span>Request for Reserve?</span></h4>
        <h4>$600</h4>
        <p><b>5</b>{` Bids`}<span><Icon type="clock-circle" /> 10 Days Left</span></p>
        <Input addonAfter="Bid Now" placeholder='Enter Amount' />
        <Row className={classes.rowStyle} gutter={32} align='middle' type='flex'>
          <Col {...twoCol}>
            <Button type='primary'>Buy Now $500</Button>
          </Col>
          <Col {...twoCol}>
            <Button type='danger'>Add to Watch</Button>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}

const DomainDetails = () => {
  return(
    <>
      <Banner text='Payment' />
      <PageWrapper>
        <Row className={classes.rowStyle} gutter={16}>
          <LeftPane />
          <RightPane />
        </Row>
      </PageWrapper>
    </>
  );
}

export default DomainDetails;