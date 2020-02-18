import React from 'react';
import { Tabs  } from 'antd';

//components
import PageWrapper from 'common/components/PageWrapper';
import Banner from 'common/components/Banner';
import ThePitch from './components/ThePitch';
import Sale from './components/Sale';
import Traffic from './components/Traffic';
import Promote from './components/Promote';
import VerifyOwnership from './components/VerifyOwnership';

//styles
import classes from './styles.module.scss';

const { TabPane } = Tabs;

const callback = (key) => {
  console.log(key);
}

// Main part
const SellingSub = () => {
  return(
    <>
      <Banner text={'Selling'} />
      <PageWrapper className={classes.pageWrapper}>
        <Tabs defaultActiveKey="1" onChange={callback} size="large" tabBarGutter={120} tabBarStyle={{fontWeight:600}}>
          <TabPane tab="1.The Pitch" key="1">
           <ThePitch></ThePitch>
          </TabPane>
          <TabPane tab="2. Sale" key="2">
            <Sale />
          </TabPane>
          <TabPane tab="3. Trafic" key="3">
            <Traffic />
          </TabPane>
          <TabPane tab="4. Promote" key="4">
            <Promote />
          </TabPane>
          <TabPane tab="5. Verify Ownership" key="5">
            <VerifyOwnership />
          </TabPane>
        </Tabs>,
      </PageWrapper>
    </>
  );
}

export default SellingSub;