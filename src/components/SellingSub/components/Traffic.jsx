import React from 'react';
import { Typography, Card, Row, Button, Upload, message, Icon } from 'antd';

//components
import InputField from './InputField';

//styles
import classes from '../styles.module.scss';

const {Text} = Typography;
const {Label} = InputField;

const uploadBtnProps = {
  name: 'file',
  // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Traffic = () => {
  return(
    <Card>
      <Text className={classes.tabDetail}>Get in front of buyers looking for website like your by categorizing it accurately, and letting them know how long the website has been live.</Text>
      <Row gutter={16}>
        <InputField label='Monthly Unique Visits'/>
        <InputField label='Monthly Page Views'/>
      </Row>
      <Row gutter={16}>
        <InputField label='Monthly Revenue' icon='dollar' />
        <InputField label='Monthly Expensives' icon='dollar' />
      </Row>
      <Row>
        <Label text={`Upload Files (Revenue Proof's & Traffic Products)`} />
        <Upload {...uploadBtnProps}>
          <Button size='large'>
            <Icon type="upload" /> Click to Upload
          </Button>
        </Upload>
      </Row>
      <Row className={classes.btnContainer}>
        <Button type='primary' size='large' className={classes.btnStyle}>Next</Button>
      </Row>
    </Card>
  );
}

export default Traffic;