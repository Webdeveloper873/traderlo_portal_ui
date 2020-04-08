import React from 'react';
import { Col, Input, Icon} from 'antd';

//style
import classes from '../styles.module.scss';

//constants
import { responsiveConf } from 'common/constants';

const { threeCol } = responsiveConf || {};

const Label = ({text}) => <span className={classes.tabDetail}>{text}</span>;

const InputField = ({ label, icon, colStyle, children, ...props }) => {
  return (
    <Col {...threeCol} {...colStyle} className={classes.marginBot20}>
      <Label text={label}/>
      <Input {...props} addonBefore={icon ? <Icon type={icon} /> : null} size='large' />
      {children}
    </Col>
  );
}

InputField.Label = Label;

export default InputField;