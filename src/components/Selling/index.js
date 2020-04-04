/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Card, Input, Checkbox } from 'antd';
import { Redirect } from 'react-router-dom';

//components
import PageWrapper from 'common/components/PageWrapper';
import Banner from 'common/components/Banner';

//actions
import { domain as domainActions } from 'appRedux/actions/selling';

//styles
import classes from './styles.module.scss';

//assets
import domain from 'assets/selling/domain.png';
import websites from 'assets/selling/websites.png';
import themesplugins from 'assets/selling/themesplugins.png';
import clonescripts from 'assets/selling/clonescripts.png';
import tmpltsGrphcs from 'assets/selling/tmpltsGrphcs.png';
import bids from 'assets/selling/bids.png';

//utils
// import { useFormInput } from 'common/utils/hooks';

//constants
import { responsiveConf, routes } from 'common/constants';

const {fiveCol, threeCol} = responsiveConf || {};
const {Search} = Input;

const stepList = [
  {
    title: 'Domains',
    imgSrc: domain,
    details: 'Lorem are many variations of passages of Lorem Ipsum available',
    value: 1,
  },
  {
    title: 'Websites',
    imgSrc: websites,
    details: 'Lorem are many variations of passages of Lorem Ipsum available',
    value: 2,
  },
  {
    title: 'Templates/Graphics',
    imgSrc: themesplugins,
    details: 'Lorem are many variations of passages of Lorem Ipsum available',
    value: 3,
  },
  {
    title: 'Clone Scripts',
    imgSrc: clonescripts,
    details: 'Lorem are many variations of passages of Lorem Ipsum available',
    value: 4,
  },
  {
    title: 'Themes & Plugins',
    imgSrc: tmpltsGrphcs,
    details: 'Lorem are many variations of passages of Lorem Ipsum available',
    value: 5,
  },
]

const Step1Card = ({title, imgSrc, details, ...props}) => {
  const { selectedItem, value } = props || {};
  console.log('selectedItem: ', selectedItem);
  console.log('value: ', value);
  return(
    <Card className={`${classes.card} ${selectedItem === value ? classes.isSelected : ''}`}>
      <h5 className={classes.title}>{title}</h5>
      <img src={imgSrc} alt={'...loading'}/>
      <p>{details}</p>
    </Card>
  )
}

const Step2Card = () => {
  return (
    <Card className={classes.step2card}
      bodyStyle={{background: '#f9f9f9'}}
      title={<>
        <img src={bids} alt='...loading' />
        <div className={classes.details}>
          <Checkbox><span>Auction - 14</span></Checkbox>
          <br/>
          <a href="https://www.freedomainauctions.com/content/learn-more-auction">Learn More.</a>
        </div>
      </>}>
      <div className={classes.cardFooter}>
        An auction will get you the highest price and the most bids.
      </div>
    </Card>
  );
}

const SellingStep = ({subtitle, nextLineSubtitle, sublink, children}) => {
  return(
    <>
      <div className={classes.steps} >
        {children}
        {subtitle? <span>{subtitle}</span> : null}
        {sublink ? <p>{sublink}</p> : null}
        <br/>
        {nextLineSubtitle? <div className={classes.stepDetails}>{nextLineSubtitle}</div> : null}
      </div>
    </>
  );
}

const Selling = () => {
  const [toNextStep, setToNextStep] = useState(false);
  const [selectedItem, setSelectedItem] = useState(1);
  const listingId = useSelector(({ sellDomain })=>sellDomain.listingId);
  const dispatch = useDispatch();

  const onGetStarted = value => {
    console.log('value: ', value);
    dispatch(domainActions.sellDomain(value));
  }

  useEffect(()=>{
    //reset listing id
    dispatch(domainActions.initializeSelling());
    setSelectedItem(1); //TEMP: for the sake of removing the warning of unused var
  }, [])

  useEffect(()=>{
    if(listingId != null){
      console.log('listingId not null');
      setToNextStep(true);
    }
  }, [listingId]);

  if(toNextStep){
    return <Redirect to={routes.SELLING_DOMAINS_PAGE} />
  }

  return(
    <>
      <Banner text={'Selling'} />
      <PageWrapper className={classes.pageWrapper}>
        <SellingStep subtitle='(Choose one)'>1. What would you like to sell?</SellingStep>
        <Row gutter={16} className={classes.rowStyle}>
          {stepList.map(itemProps => <Col {...fiveCol} className={classes.colStyle}>
            <Step1Card selectedItem={selectedItem} {...itemProps}/>
          </Col>)}
        </Row>
        <SellingStep
          subtitle='(Choose one)'
          nextLineSubtitle='Learn more about selling on Free Domain Auctions'
        >
          2. How do you want to sell your asset?
        </SellingStep>
        <Row gutter={16} className={classes.rowStyle}>
          {[1].map(idx => (
            <Col {...threeCol} className={classes.colStyle}>
              <Step2Card />
            </Col>
          ))}
        </Row>
        <SellingStep nextLineSubtitle='Your Domain Name (ex. cardealsnearme.com)'>3. Basic details to get it started</SellingStep>
        <Row gutter={16} className={classes.rowStyle}>
          <Col xs={24} md={18}>
            <Input placeholder="Enter Domain Name" />
          </Col>
        </Row>
        <SellingStep nextLineSubtitle='Please Enter Your Domain Keyword (ex. Car Deals Near Me)'>4. Domain Keyword</SellingStep>
        <Row gutter={16} className={classes.rowStyle}>
          <Col xs={24} md={12}>
            <Search placeholder="Enter How You Pronounce Domain Name?"
              onSearch={onGetStarted}
              enterButton='Getting Started'
            />
          </Col>
        </Row>
      </PageWrapper>
    </>
  );
}

export default Selling;