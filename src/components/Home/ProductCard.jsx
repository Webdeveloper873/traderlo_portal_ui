import React from 'react';
import { Col, Row } from 'antd';

//component
import CardItem from 'common/components/CardItem';

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