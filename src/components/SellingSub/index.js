import React from 'react';
import { Tabs, Card, Menu, Dropdown, Button, Icon, message, Form, Input, Col, Row  } from 'antd';

//components
import PageWrapper from 'common/components/PageWrapper';
import Banner from 'common/components/Banner';
import ThePitch from 'components/SellingSub/ThePitch';
import Sale from './components/Sale';
import Traffic from './components/Traffic';
import Promote from './components/Promote';

//styles
import classes from './styles.module.scss';

//constants
import { responsiveConf } from 'common/constants';

const { TextArea } = Input;
const { TabPane } = Tabs;
const {fiveCol, threeCol} = responsiveConf || {};

//The Pitch Part
// const handleMenuClick = (e) => {
//   message.info('Click on menu item.');
//   console.log('click', e);
// }

// const listCategoryMenu = () => {
//   return (
//     <Menu onClick={handleMenuClick}>
//       <Menu.Item key="1">
//         <Icon type="user" />
//         Male
//       </Menu.Item>
//       <Menu.Item key="2">
//         <Icon type="user" />
//         Female
//       </Menu.Item>
//       <Menu.Item key="3">
//         <Icon type="user" />
//         Others
//       </Menu.Item>
//     </Menu>
//   )
// };



// const handleButtonClick = (e) => {
//   message.info('Click on left button.');
//   console.log('click left button', e);
// }



// const ThePitch = () => {
//   return(
//     <>
//       <h5 style={{fontWeight:700}}>Describe Your Product</h5>
//       <div style={{marginTop:20}}>
//         <span style={{fontSize:17}}>Get in front of buyers looking for website like your by categorizing it accurately, and letting them know how long the website has been live.</span>
//       </div>
//       <div>
//         <Row>
//           <Dropdown overlay={listCategoryMenu}>
//             <Button size="large" style={{width:'30%', marginTop:30,marginBottom:30,marginRight:30}}>
//               List Category <Icon type="down" />
//             </Button>
//           </Dropdown>
//           <Dropdown overlay={listCategoryMenu}>
//             <Button size="large" style={{width:'30%', margin:30}}>
//               List Sub Category <Icon type="down" />
//             </Button>
//           </Dropdown>
//         </Row>
//         <Row>
//           {/* <Form layout="inline" >
//             <Form.Item > */}
//                 <Input
//                   size="large"
//                   style={{width:685}}
//                   // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                   placeholder="Description Heading"
//                 />
//             {/* </Form.Item>
//           </Form> */}
//         </Row>
//         <Row>
//           <TextArea rows={8} style={{width:685, marginTop:20}}  placeholder="Description"/>
//         </Row>
//         <Row style={{marginTop:30}}>
//           <Button size='large' style={{backgroundColor:'#00bcd4', color:'white', textAlign:'center', width:140, padding:10, height:50}}>Next</Button>
//         </Row>
//       </div>
//     </>
//   )
// }


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
           <Card style={{paddingRight:25,paddingLeft:25, paddingTop:10}}> <ThePitch></ThePitch>

           </Card>
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
            Content of Tab Pane 5
          </TabPane>
        </Tabs>,
      </PageWrapper>
    </>
  );
}

export default SellingSub;