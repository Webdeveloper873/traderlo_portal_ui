import React from 'react';
import { Col, Typography, Input, Icon} from 'antd';

//style
import classes from '../styles.module.scss';

//constants
import {responsiveConf} from 'common/constants';

const {Text} = Typography;
const {threeCol} = responsiveConf || {};

const Label = ({text}) => <Text strong className={classes.tabDetail}>{text}</Text>;

const InputField = ({ label, icon, colStyle }) => {
  return (
    <Col {...threeCol} {...colStyle} className={classes.marginBot20}>
      <Label text={label}/>
      <Input addonBefore={icon ? <Icon type={icon} /> : null} size='large' />
    </Col>
  );
}

InputField.Label = Label;

export default InputField;