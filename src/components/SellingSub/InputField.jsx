import React from 'react';
import { Col, Typography, Input, Icon} from 'antd';

//style
import classes from './styles.module.scss';

//constants
import {responsiveConf} from 'common/constants';

const {Text} = Typography;
const {threeCol} = responsiveConf || {};

const InputField = ({ label, icon }) => {
  return (
    <Col {...threeCol} className={classes.marginBot20}>
      <Text strong className={classes.tabDetail}>{label}</Text>
      <Input addonBefore={<Icon type={icon} />} size='large' />
    </Col>
  );
}

export default InputField;