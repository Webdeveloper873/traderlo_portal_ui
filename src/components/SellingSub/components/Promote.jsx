import React from 'react';
import { Button, Card, Col, Row } from 'antd';

//components
import InputField from './InputField';

//styles
import classes from '../styles.module.scss';

//resources
import EditorChoice from 'assets/selling/editorchoice.png';
import Featured from 'assets/selling/featured.png';

const PromoteCard = ({imgSrc, label}) => {
  return(
    <Card className={classes.promoteCard}
      bodyStyle={{ background: '#f9f9f9' }}
      title={<>
        <h5>Editor Choice</h5>
        <img src={imgSrc} alt='...loading' />
      </>}>
      <div className={classes.cardFooter}>
        An auction will get you the highest price and the most bids.
      </div>
    </Card>
  );
}

const Promote = () => {
  return(
    <Card>
      <Row gutter={16}>
        <Col xs={24} md={8}>
          <PromoteCard imgSrc={EditorChoice} label='Editor Choice' />
        </Col>
        <Col xs={24} md={8}>
          <PromoteCard imgSrc={Featured} label='Featured' />
        </Col>
      </Row>
      <Row className={classes.btnContainer}>
        <Button type='primary' size='large' className={classes.btnStyle}>Next</Button>
      </Row>
    </Card>
  );
}

export default Promote;