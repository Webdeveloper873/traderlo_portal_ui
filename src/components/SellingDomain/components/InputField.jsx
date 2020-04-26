import React from 'react';
import { Col, Input, Icon, Form } from 'antd';

//style
import classes from '../styles.module.scss';

//constants
import { responsiveConf } from 'common/constants';

const { threeCol } = responsiveConf || {};

const Label = ({text}) => <span className={classes.tabDetail}>{text}</span>;

const InputField = ({ id, required, label, icon, colStyle, validateStatus, help, form, children, customField, ...props }) => {
  const { getFieldDecorator } = form || {};
  return (
    <Col {...threeCol} {...colStyle} className={classes.marginBot20}>
      <Label text={label}/>
      <Form.Item validateStatus={validateStatus} help={help}>
        {getFieldDecorator(id || 'passId', {
          rules: [{ required: required, message: 'This field is required!' }],
        })(
          <Input {...props} addonBefore={icon ? <Icon type={icon} /> : null} size='large' />
        )}
      </Form.Item>
      {children}
    </Col>
  );
}

InputField.Label = Label;

export default InputField;