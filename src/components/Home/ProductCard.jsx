import React from 'react';
import {CardDeck, Card} from 'react-bootstrap';
import { Col, Row } from 'antd';

//component
import CardItem from 'common/components/CardItem';

//styles
import classes from './styles.module.scss';

//constants
import { responsiveConf } from 'common/constants';

const { twoCol } = responsiveConf || {};

const ProductCard = () => {
  return(
    <Row gutter={16}>
      <Col {...twoCol}>
        <CardItem/>
      </Col>
      <Col {...twoCol}>
        <CardItem/>
      </Col>
    </Row>
  );
}

export default ProductCard;