import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';

//components
import PageWrapper from 'common/components/PageWrapper';

//styles
import classes from './styles.module.scss';

//resources
import ImageHolder from 'assets/main.jpg';

const CardItem = () => {
  return (
    <Col xs={12} lg={4}>
      <Card>
        <Card.Img variant="top" src={ImageHolder} />
        <Card.Body>
          <Card.Text>
            Card content
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

const BlogCards = () => {
  return(
      <PageWrapper center>
        <div className={`${classes.fullWidth} ${classes.contentRow}`}>
          <h1>Blog</h1>
          <span className={classes.subTitle}>Consectetur adipisicing eliteiuim set eiusmod tempor incididunt labore etnalom dolore magna aliqua udiminimate veniam quistan norud.</span>
        </div>
        <Row className={classes.contentRow} gutter={24}>
          <CardItem />
          <CardItem />
          <CardItem />
        </Row>
      </PageWrapper>
  );
}

export default BlogCards;