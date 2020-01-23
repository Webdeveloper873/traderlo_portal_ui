import React, {useState} from 'react';
import { Col, Row} from 'react-bootstrap';

//components
import Login from 'components/Login';
import Header from 'common/components/Header';
import Footer from 'common/components/Footer';
import PageWrapper from 'common/components/PageWrapper';
import GlobalSearch from './GlobalSearch';
import CarouselBlogs from './CarouselBlogs';
import ProductCard from './ProductCard';
import TemplatesList from './TemplatesList';
import HowItWorks from './HowItWorks';
import SubscribeLetter from './SubscribeLetter';
import BlogCards from './BlogCards';

//styles
import classes from './styles.module.scss';

const HomeContent = () => {
  return (
    <>
      <PageWrapper>
        <Row className={classes.contentRow}>
          <Col xs={12} lg={6} className={`sticky-top ${classes.globalSearch}`}>
            <div className={classes.title}>No listing fee! Pay only when you Sell</div>
            <div className={classes.marginBot}>Buy/Sell Domains, Websites, Online Business and Apps</div>
            <GlobalSearch />
          </Col>
          <Col xs={12} lg={6} className={`fized-right`}>
            <CarouselBlogs />
          </Col>
        </Row>

        <Row className={classes.contentRow}>
          <Col xs={12} lg={5}>
            <ProductCard />
          </Col>
          <Col xs={12} lg={7}>
            <TemplatesList />
          </Col>
        </Row>

        <Row className={classes.contentRow}>
          <HowItWorks />
        </Row>

      </PageWrapper>
      <SubscribeLetter />
      <BlogCards />
    </>
  );
}

const Home = () => {

  return(
    <>

      <HomeContent />

    </>
  );
}

export default Home;