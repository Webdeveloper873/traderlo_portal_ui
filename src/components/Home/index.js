/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col as ColTemp, Row as RowTemp} from 'react-bootstrap';
import { Col, Row, notification } from 'antd';

//components
import PageWrapper from 'common/components/PageWrapper';
import MultiItemCarousel from 'common/components/MultiItemCarousel';
import GlobalSearch from './GlobalSearch';
import CarouselBlogs from './CarouselBlogs';
import ProductCard from './ProductCard';
import TemplatesList from './TemplatesList';
import HowItWorks from './HowItWorks';
import SubscribeLetter from './SubscribeLetter';
import BlogCards from './BlogCards';

//actions
import { getFeaturedBlogs } from 'appRedux/actions/home/blogs';
import { user } from 'appRedux/actions/user';

//styles
import classes from './styles.module.scss';


const Home = () => {
  const featBlogs = useSelector(({ blogs }) => blogs.featBlogs);
  const dispatch = useDispatch();
  const register = useSelector(({ user }) => user.register);

  useEffect(() => {
    if(register) {
      notification.success({
        className: classes.successNotif,
        message: 'Sign up success!',
        description: 'You can now login using your new account.',
      });
    }else if(register === false){
      notification.error({
        className: classes.successNotif,
        message: 'Sign up failed!',
        description: 'Please try again.',
      });
    }
    dispatch(user.resetUserState());
  }, [register]);

  useEffect(()=>{
    //add fetching on initialization
    dispatch(getFeaturedBlogs());
  }, []);

  return(
    <>
      <PageWrapper>
        <RowTemp className={classes.contentRow}>
          <ColTemp xs={12} lg={6} className={`sticky-top ${classes.globalSearch}`}>
            <div className={classes.title}>No listing fee! Pay only when you Sell</div>
            <div className={classes.marginBot}>Buy/sell websites, domains, and more!</div>
            <GlobalSearch />
          </ColTemp>
          <ColTemp xs={12} lg={6} className={`fized-right`}>
            <CarouselBlogs />
          </ColTemp>
        </RowTemp>

        <Row className={classes.contentRow} gutter={16}>
          <Col xs={24} lg={8}>
            <ProductCard />
          </Col>
          <Col xs={24} lg={16}>
            <TemplatesList />
          </Col>
        </Row>
      </PageWrapper>

      <MultiItemCarousel />

      <PageWrapper>
        <RowTemp className={classes.contentRow}>
          <HowItWorks />
        </RowTemp>
      </PageWrapper>

      <SubscribeLetter />
      {featBlogs && <BlogCards featBlogs={featBlogs} />}
    </>
  );
}

export default Home;