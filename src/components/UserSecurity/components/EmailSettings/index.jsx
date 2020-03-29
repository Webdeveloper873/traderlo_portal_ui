import React from 'react';
import { Checkbox, Row, Col } from 'antd';

//components
import Panel from 'common/components/Panel';

const settingsOpt = [
  {
    label: 'Notify me when a bid or offer is placed on my listing',
    value: 1,
  },
  {
    label: 'Notify me when buyer has purchased my listing',
    value: 2,
  },
  {
    label: 'Notify me when seller has accepted/rejected my placed bid or offer',
    value: 3,
  },
  {
    label: 'Notify me when seller transfers file to me',
    value: 4,
  },
  {
    label: 'Notify me when admin has paid my redeem request amount',
    value: 5,
  },
  {
    label: 'Notify me when Buyer has given a Feedback to me',
    value: 6,
  },
  {
    label: 'Notify me for all the messages',
    value: 7,
  },
  {
    label: 'Notify me if dispute is raised for the listing',
    value: 8,
  },
  {
    label: 'Save Changes',
    value: 9,
  },
];

const CheckboxItem = ({label, value, ...props}) => {
  return(
    <Row>
      <Col span={24}>
        <Checkbox value={value} {...props}>{label}</Checkbox>
      </Col>
    </Row>
  );
}

const EmailSettings = () => {
  return(
    <>
      <Panel header='Email Notification Settings'>
        <p>Manage mails for new updates in Free Domain Auctions:</p>
        <Row style={{ width: '100%' }}>
          <Checkbox.Group style={{ width: '100%' }}>
            {settingsOpt.map(opt => <CheckboxItem value={opt.value} label={opt.label} />)}
          </Checkbox.Group>
        </Row>
      </Panel>
    </>
  );
}

export default EmailSettings;