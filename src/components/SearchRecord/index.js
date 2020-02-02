import React from 'react';
import { Card, Col } from 'react-bootstrap';

//components
import PageWrapper from 'common/components/PageWrapper';
import Banner from './Banner';

//styles
import classes from './styles.module.scss';

const Filters = () => {
  return(
    <Card body>
      <span>Filters</span>
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