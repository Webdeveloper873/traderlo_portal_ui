/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Col, Card, Input, Row, Button } from 'antd';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import InputField from 'common/components/InputField';

//actions

//utils
import { useFormInput } from 'common/utils/hooks';

//styles
import classes from './styles.module.scss';

const { TextArea } = Input;
const { Label } = InputField;

const UserSecurity = () => {
  const bannerPath = [''];
  const comment = useFormInput('');

  const onClickReport = () => {
    //dispatch action for report
  }

  return (
    <>
      <Banner text={'Report'} path={bannerPath} />
      <PageWrapper addTopMargin>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Card className={classes.cardStyle}>
            <Label text='Report'/>
            <p>Report any activity that breaches our terms and conditions or appears suspicious. We review all reports. Reported items are not removed automatically.</p>
            <Label text='Description'/>
            <Row>
              <Col span={15}>
                <TextArea rows={6}
                  placeholder='Comment'
                  onChange={comment.handleInputChange}
                />
              </Col>
            </Row>
            <Button size='large' type='primary'
              className={classes.reportBtn}
              onClick={onClickReport}
            >
              Report
            </Button>
          </Card>
        </Col>
      </PageWrapper>
    </>
  );
}

export default UserSecurity;