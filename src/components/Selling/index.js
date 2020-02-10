import React from 'react';
import {Col, Row, Card} from 'antd';

//components
import PageWrapper from 'common/components/PageWrapper';
import Banner from 'common/components/Banner';

//styles
import classes from './styles.module.scss';

//assets
import domain from 'assets/selling/domain.png';
import websites from 'assets/selling/websites.png';
import themesplugins from 'assets/selling/themesplugins.png';
import clonescripts from 'assets/selling/clonescripts.png';
import tmpltsGrphcs from 'assets/selling/tmpltsGrphcs.png';
import bids from 'assets/selling/bids.png';

//constants
import { responsiveConf } from 'common/constants';

const {fiveCol, threeCol} = responsiveConf || {};

const stepList = [
  {
    title: 'Domains',
    imgSrc: domain,
    details: 'Lorem are many variations of passages of Lorem Ipsum available',
  },
  {
    title: 'Websites',
    imgSrc: websites,
    details: 'Lorem are many variations of passages of Lorem Ipsum available',
  },
  {
    title: 'Templates/Graphics',
    imgSrc: themesplugins,
    details: 'Lorem are many variations of passages of Lorem Ipsum available',
  },
  {
    title: 'Clone Scripts',
    imgSrc: clonescripts,
    details: 'Lorem are many variations of passages of Lorem Ipsum available',
  },
  {
    title: 'Themes & Plugins',
    imgSrc: tmpltsGrphcs,
    details: 'Lorem are many variations of passages of Lorem Ipsum available',
  },
]

const Step1Card = ({title, imgSrc, details}) => {
  return(
    <Card className={classes.card}>
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
        <span>Auction - 14</span><br/>
        <a href="https://www.freedomainauctions.com/content/learn-more-auction">Learn More.</a>
      </>}>
      <div className={classes.cardFooter}>
        An auction will get you the highest price and the most bids.
      </div>
    </Card>
  );
}

const SellingStep = ({subtitle, children}) => {
  return(
    <div className={classes.steps} >
      {children}
      {subtitle? <span>{subtitle}</span> : null}
    </div>
  );
}

const Selling = () => {
  return(
    <>
      <Banner text={'Selling'} />
      <PageWrapper className={classes.pageWrapper}>
        <SellingStep subtitle='(Choose one)'>1. What would you like to sell?</SellingStep>
        <Row gutter={16} className={classes.rowStyle}>
          {stepList.map(itemProps => <Col {...fiveCol} className={classes.colStyle}>
            <Step1Card {...itemProps}/>
          </Col>)}
        </Row>
        <SellingStep subtitle='(Choose one)'>2. How do you want to sell your asset?</SellingStep>
        <Row gutter={16} className={classes.rowStyle}>
          <Col {...threeCol} className={classes.colStyle}>
            <Step2Card />
          </Col>
        </Row>
      </PageWrapper>
    </>
  );
}

export default Selling;