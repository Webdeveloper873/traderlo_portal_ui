import React from 'react';
import {CardDeck, Col, Card} from 'react-bootstrap'

//styles
import classes from './styles.module.scss';

//assets
import A1 from 'assets/a1.png';
import A2 from 'assets/a2.png';
import A3 from 'assets/a3.png';
import A4 from 'assets/a4.png';
import A5 from 'assets/a5.png';

const CardItem = ({imgSrc, cardTitle}) => {
  return(
    <Card className={classes.card}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Title>{cardTitle}</Card.Title>
      <Card.Body>
        <Card.Text>
          Lorem Ipsum is simply dummy text of the printing and type.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

const HowItWorks = () => {
  return(
    <>
      <Col xs={12} lg={12} md={12} className={`${classes.howItWorks}`}>
        <h1>How It Works?</h1>
        <span className={classes.subtitle}>Consectetur adipisicing eliteiuim set eiusmod tempor incididunt labore etnalom dolore magna aliqua udiminimate veniam quistan norud.</span>
        <CardDeck className={classes.cardDeck}>
          <CardItem imgSrc={A1} cardTitle='List your products'/>
          <CardItem imgSrc={A2} cardTitle='Receive bids'/>
          <CardItem imgSrc={A3} cardTitle='Pay to Traderlo'/>
          <CardItem imgSrc={A4} cardTitle='Delivery'/>
          <CardItem imgSrc={A5} cardTitle='Get paid by Traderlo'/>
        </CardDeck>
      </Col>
    </>
  );
}

export default HowItWorks;