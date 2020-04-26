import React from 'react';
import { Col, Input, Icon, Form } from 'antd';

//style
import classes from './styles.module.scss';

const Label = ({ text, className }) => <span className={`${classes.label} ${className}`}>{text}</span>;

const InputField = ({ id, required, label, icon, colStyle, colWidth, validateStatus, help, form, children, ...props }) => {
  const { getFieldDecorator } = form || {};
  return (
    <Col span={24} {...colWidth} {...colStyle} className={classes.marginBot20}>
      <Label text={label} />
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