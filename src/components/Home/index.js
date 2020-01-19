import React, {useState} from 'react';
import {Col, Image} from 'react-bootstrap';

//components
import Login from 'components/Login';
import Header from 'common/components/Header';
import Footer from 'common/components/Footer';
import PageWrapper from 'common/components/PageWrapper';
import GlobalSearch from './GlobalSearch';
import CarouselBlogs from './CarouselBlogs';

//styles
import classes from './styles.module.scss';

const HomeContent = () => {
  return (
    <PageWrapper>
      <Col xs={12} lg={6} className={`sticky-top ${classes.globalSearch}`}>
        <div className={classes.title}>No listing fee! Pay only when you Sell</div>
        <div className={classes.marginBot}>Buy/Sell Domains, Websites, Online Business and Apps</div>
        <GlobalSearch />
      </Col>
      <Col xs={12} lg={6} className={`fized-right`}>
        <CarouselBlogs />
      </Col>
    </PageWrapper>
  );
}

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleShowLogin = () => setShowLogin(!showLogin)

  return(
    <>
      <Header onClickSignInUp={toggleShowLogin} />
      <Login show={showLogin} handleClose={toggleShowLogin} />
      <HomeContent />
      <Footer />
    </>
  );
}

export default Home;