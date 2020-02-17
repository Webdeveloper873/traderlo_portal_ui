import React from 'react';
import { Button, Card, Col, Row } from 'antd';

//styles
import classes from '../styles.module.scss';

//resources
import EditorChoice from 'assets/selling/editorchoice.png';
import Featured from 'assets/selling/featured.png';
import FreeBasic from 'assets/selling/freebasic.png';

const PromoteCard = ({imgSrc, label, details}) => {
  return(
    <Col xs={24} md={8}>
      <Card className={classes.promoteCard}
        bodyStyle={{ background: '#f9f9f9' }}
        title={<>
          <h5>{label}</h5>
          <img src={imgSrc} alt='...loading' />
        </>}>
        <div className={classes.cardFooter}>{details}</div>
      </Card>
    </Col>
  );
}

const Promote = () => {
  return(
    <Card>
      <Row gutter={16}>
        <PromoteCard imgSrc={FreeBasic} label='Free Basic'
          details='Promote your listing for free, At no cost.'
        />
        <PromoteCard imgSrc={Featured} label='Featured'
          details='Be first to sell your listing at $50Per Month'
        />
        <PromoteCard imgSrc={EditorChoice} label='Editor Choice'
          details='Be first to sell your listing at $50Per Month'
        />
      </Row>
      <Row className={classes.btnContainer}>
        <Button size='large' className={classes.btnStyle}>Next</Button>
      </Row>
    </Card>
  );
}

export default Promote;