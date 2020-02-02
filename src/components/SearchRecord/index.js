import React from 'react';
import { Row, Col } from 'react-bootstrap';

//components
import PageWrapper from 'common/components/PageWrapper';

const SearchRecord = () => {
  return(
    <PageWrapper>
      <Col xs={12} md={4}>sideA</Col>
      <Col xs={12} md={8}>Side B</Col>
    </PageWrapper>
  );
}

export default SearchRecord;