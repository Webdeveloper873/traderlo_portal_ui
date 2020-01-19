import React from 'react';
import {CardDeck, Card} from 'react-bootstrap';

//styles
import classes from './styles.module.scss';

//assets
import ImageHolder from 'assets/main.jpg';

const ProductCard = () => {
  return(
    <CardDeck>
      <Card className={classes.card}>
        <Card.Img variant="top" src={ImageHolder} />
        <Card.Body>
          <Card.Text>
            Card content
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className={classes.card}>
        <Card.Img variant="top" src={ImageHolder} />
        <Card.Body>
          <Card.Text>
            Card content
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}

export default ProductCard;