import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'antd';

//styles
import classes from '../styles.module.scss';

//resources
import EditorChoice from 'assets/selling/editorchoice.png';
import Featured from 'assets/selling/featured.png';
import FreeBasic from 'assets/selling/freebasic.png';

const PromoteCard = ({optKey, selectedOpt, imgSrc, label, details, onClickCard}) => {
  return(
    <Col xs={24} md={8}>
      <Card className={`${classes.promoteCard} ${selectedOpt === optKey ? classes.selected : ''}`}
        onClick={() => onClickCard(optKey)}
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
  const [selectedOpt, setSelectedOpt] = useState(1);

  const onClickCard = (key) => {
    console.log('selectedOpt', key);
    setSelectedOpt(key);
  }

  return(
    <Card>
      <Row gutter={16}>
        <PromoteCard selectedOpt={selectedOpt} onClickCard={onClickCard} optKey={1} imgSrc={FreeBasic} label='Free Basic'
          details='Promote your listing for free, At no cost.'
        />
        <PromoteCard selectedOpt={selectedOpt} onClickCard={onClickCard} optKey={2} imgSrc={Featured} label='Featured'
          details='Be first to sell your listing at $50Per Month'
        />
        <PromoteCard selectedOpt={selectedOpt} onClickCard={onClickCard} optKey={3} imgSrc={EditorChoice} label='Editor Choice'
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