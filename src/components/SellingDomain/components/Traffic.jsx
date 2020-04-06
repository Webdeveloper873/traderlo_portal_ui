import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Card, Row, Button, Upload, message, Icon, Col } from 'antd';

//components
import InputField from './InputField';

//action
import { domain } from 'appRedux/actions/selling';

//utils
import { useFormInput } from 'common/utils/hooks';

//styles
import classes from '../styles.module.scss';

//constants
import { responsiveConf } from 'common/constants';

//resources
import Graph from 'assets/selling/graph.png'

const { Text } = Typography;
const { Label } = InputField;
const { twoCol } = responsiveConf;
const { Dragger } = Upload;

const uploadBtnProps = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Traffic = ({ setActiveKey }) => {
  const listingId = useSelector(({ sellDomain }) => sellDomain.listingId);
  const traffic = useSelector(({ sellDomain }) => sellDomain.traffic);
  const uniqVisit = useFormInput();
  const pageViews = useFormInput();
  const revenue = useFormInput();
  const expensives = useFormInput();
  const dispatch = useDispatch();

  const onClickNext = () => {
    const data = {
      args: {
        avgUniquePerMonth: parseInt(uniqVisit.value),
        avgPageViewsPerMonth: parseInt(pageViews.value),
        averageRevenue: parseInt(revenue.value),
        averageExpense: parseInt(expensives.value),
      },
      listingId,
    };
    dispatch(domain.setTraffic(data));
  }

  if (traffic) {
    setActiveKey(4);
  }

  return(
    <Card>
      <Text className={classes.tabDetail}>Get in front of buyers looking for website like your by categorizing it accurately, and letting them know how long the website has been live.</Text>
      <Row gutter={16}>
        <Col xs={24} md={14}>
          <Row gutter={16}>
            <InputField onChange={uniqVisit.handleInputChange} label='Monthly Unique Visits' colStyle={twoCol} />
            <InputField onChange={pageViews.handleInputChange} label='Monthly Page Views' colStyle={twoCol} />
          </Row>
          <Row gutter={16}>
            <InputField onChange={revenue.handleInputChange} label='Monthly Revenue' icon='dollar' colStyle={twoCol} />
            <InputField onChange={expensives.handleInputChange} label='Monthly Expensives' icon='dollar' colStyle={twoCol} />
          </Row>
          <Row>
            <Label text={`Upload Files (Revenue Proof's & Traffic Products)`} />
            {/* <Upload {...uploadBtnProps}>
              <Button size='large'>
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload> */}
            <Dragger {...uploadBtnProps}>
              <p className="ant-upload-drag-icon">
                <Icon type="cloud-upload" />
              </p>
              <p className={classes.boldLabel}>{`Drag&Drop files here`}</p>
            </Dragger>
          </Row>
        </Col>
        <Col xs={24} md={6} className={classes.imgContainer}>
          <img src={Graph} alt='...loading'/>
        </Col>
      </Row>
      <Row className={classes.btnContainer}>
        <Button onClick={onClickNext} size='large' className={classes.btnStyle}>Next</Button>
      </Row>
    </Card>
  );
}

export default Traffic;