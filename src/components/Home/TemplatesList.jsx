import React from 'react';
import {ListGroup, Col, Row} from 'react-bootstrap';

//styles
import classes from './styles.module.scss';

const TemplatesList = () => {
  return(
    <Row>
      <Col xs={4} lg={4} md={4} className={classes.tempLists}>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col xs={4} lg={4} md={4} className={classes.tempLists}>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col xs={4} lg={4} md={4} className={classes.tempLists}>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
}

export default TemplatesList;