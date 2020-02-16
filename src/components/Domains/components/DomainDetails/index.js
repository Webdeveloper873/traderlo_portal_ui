import React from 'react';
import { Row, Col, Card } from 'antd';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';

//styles
import classes from './styles.module.scss';

const LeftPane = () => {
  return(
    <Col xs={24} md={16}>
      <Card className={classes.cardStyle}>
        <h3>Domain Name</h3>
      </Card>
    </Col>
  );
}

const RightPane = () => {
  return(
    <Col xs={24} md={8}>
      <Card>
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