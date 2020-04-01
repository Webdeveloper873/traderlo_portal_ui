import React from 'react';
import { Row, Col, Input, Switch, Button } from 'antd';

//components
import Panel from 'common/components/Panel';

//styles
import classes from './styles.module.scss';

//constants
import { responsiveConf } from 'common/constants';

const { threeCol } = responsiveConf;

const PassAndSecurity = () => {
  return(
    <>
      <Panel header='Change Password' headerRight={<Button type="primary" size={'large'} className={classes.saveChanges}>Save Changes</Button>}>
        <Row gutter={24}>
          <Col {...threeCol}>
            <Input size='large' placeholder='Old Password' />
          </Col>
          <Col {...threeCol}>
            <Input size='large' placeholder='New Password' />
          </Col>
          <Col {...threeCol}>
            <Input size='large' placeholder='Re-Type Password' />
          </Col>
        </Row>
      </Panel>
      <Panel header='Two-factor authentication' className={classes.topMargin}>
        <p className={classes.text}>Please download an authentication app such as 2FA Authenticator to your smartphone. Once activated, the app will generate a code that will be needed to unlock your account.</p>
        <Col span={22}>
          <p className={classes.text}>
            While optional, using 2FA Authentication can increase the security of your account. Learn how to set up 2FA Authenticator or install 2FA Authenticator.
          </p>
        </Col>
        <Col span={2}>
          <Switch defaultChecked />
        </Col>
      </Panel>
    </>
  );
}

export default PassAndSecurity;