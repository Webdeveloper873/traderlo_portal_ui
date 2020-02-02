import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

//components
import PageWrapper from 'common/components/PageWrapper';
import Divider from 'common/components/Divider';
import Banner from './Banner';

//styles
import classes from './styles.module.scss';

const Filters = () => {
  return(
    <Card className={classes.filters} body>
      <div className='d-flex justify-content-between'>
        <span className={classes.label}>Filters</span>
        <Button variant="outline-info border-0">clear all</Button>
      </div>
      <Divider />
    </Card>
  );
}


const SearchKeyword = () => {
  return(
    <div className={classes.searchKeyword}>

    </div>
  );
}

const SearchRecord = ({title}) => {
  return(
    <>
      <Banner text={title} />
      <PageWrapper className={classes.pageWrapper}>
        <Col xs={12} md={3}>
          <Filters />
        </Col>
        <Col xs={12} md={9}>
          <SearchKeyword />
        </Col>
      </PageWrapper>
    </>
  );
}

export default SearchRecord;