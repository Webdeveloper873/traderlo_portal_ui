import React, { useState } from 'react';
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
  const [activeKey, setActiveKey] = useState(1);
  const bannerPath = ['Start Selling', 'Domains', 'Add Product Details'];

  const moveToNextTab = () => {
    console.log('move to next: ', activeKey)
    setActiveKey(activeKey+1);
  }

  const onTabClick = (key) => {
    setActiveKey(parseInt(key));
  }

  return(
    <>
      <Banner text={'Selling'} path={bannerPath}/>
      <PageWrapper className={classes.pageWrapper}>
        <Tabs className={classes.tabStyle} activeKey={JSON.stringify(activeKey)} 
          onNextClick={moveToNextTab} 
          defaultActiveKey="1" 
          onChange={callback} 
          size="large" 
          tabBarGutter={120} 
          tabBarStyle={{fontWeight:600}} 
          onTabClick={onTabClick}
        >
          <TabPane tab="1.The Pitch" key="1">
            <ThePitch setActiveKey={setActiveKey} />
          </TabPane>
          <TabPane tab="2. Sale" key="2">
            <Sale setActiveKey={setActiveKey} />
          </TabPane>
          <TabPane tab="3. Trafic" key="3">
            <Traffic setActiveKey={setActiveKey} />
          </TabPane>
          <TabPane tab="4. Promote" key="4">
            <Promote setActiveKey={setActiveKey} />
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