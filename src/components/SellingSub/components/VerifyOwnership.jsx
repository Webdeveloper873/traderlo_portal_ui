import React, {useState} from 'react';
import { Typography, Card, Row, Button, Col, Tabs, Avatar, Icon, Input } from 'antd';

//styles
import classes from '../styles.module.scss';

//resources
import HtmlImage from 'assets/selling/html.png';
import KeyImage from 'assets/selling/key.png';
import TxtImage from 'assets/selling/txt.png';
import { compose } from 'redux';

//declared style
const donwloadButton = {color: '#00bcd4', marginTop:20};
const txtContentGreyArea = {marginTop:15, backgroundColor:'#fafafa'};
const txtContentInputBox = {marginLeft:15,marginRight:15};
const txtContentInputText = {marginLeft:15, marginTop:15};
const txtContentInputText2 = {marginLeft:15, marginTop:10};
const txtContentSubText = {marginLeft:40, marginTop:10};
const avatarSubDetailSelected = {fontWeight:500, color:'#00bcd4'};
const avatarSubDetailUnselected = {fontWeight:500, color:'#dbdcde'};

const HtmlFileContent = () => {

  return (<>
    <Row style={{marginTop:30}}>
      <span style={{fontSize:17}}>Please click on the button to download the file and put it inside the root folder of the your site and then click on verify button below.Please click on the button to download the file and put it inside the root folder of the your site and then click on verify button below.</span>
      <Row >
        <Button type="link" size='large' style={donwloadButton}>Download  <Icon type="download" /></Button>
      </Row>
    </Row>
  </>)
}

const TXTRecordContent = () => {

  return (<>
    <Row style={{marginTop:30}}>
      <span style={{fontSize:17}}>Please add the following TXT records to your DNS zone editor on your Website host and then click button to verify, the verification process maytake from 10 min to 24 hours</span>
      <Row >
        <Card style={txtContentGreyArea} bordered={false}>
          <Row>
            <Col span={11} style={txtContentInputBox}>
            <Input
              size="large"
              placeholder="URL"
            />
            </Col>
            <Col span={11} style={txtContentInputBox}>
            <Input
              size="large"
              placeholder="Text Record"
            />
            </Col>
          </Row>
          <Row style={txtContentInputText}>
            <span style={{fontSize:15}}>1. Copy the above Generated TXT records.</span>
          </Row>
          <Row style={txtContentInputText2}>
            <span style={{fontSize:15}}>2. Sign in to your domain host.</span>
          </Row>
          <Row style={txtContentInputText2}>
            <span style={{fontSize:15}}>3. Go to your domain's DNS records.</span>
          </Row>
          <Row style={txtContentSubText}>
            <span style={{fontSize:15}}>a. For the record type, select TXT.</span>
          </Row>
          <Row style={txtContentSubText}>
            <span style={{fontSize:15}}>b. In the Name/Host/Alias field, enter @ or leave it blank.</span>
          </Row>
          <Row style={txtContentSubText}>
            <span style={{fontSize:15}}>c. Your host might require you to enter your domain, which looks like yourdomain.com, into this field. Your other DNS records might indicate what you should enter.</span>
          </Row>
          <Row style={txtContentSubText}>
            <span style={{fontSize:15}}>d. In the Time to Live (TTL) field, enter 86400 or leave the default.</span>
          </Row>
          <Row style={txtContentSubText}>
            <span style={{fontSize:15}}>e. In the Value/Answer/Destination field, paste the verification record you copied in step 1.</span>
          </Row>
          <Row style={txtContentSubText}>
            <span style={{fontSize:15}}>f. Save the record.</span>
          </Row>
        </Card>
      </Row>
      <Row className={classes.btnContainer}>
        <Button size='large' className={classes.btnStyle}>Next</Button>
      </Row>
    </Row>
  </>)
}

const MeteKeyContent = () => {

  return (<>
    <Row style={{marginTop:30}}>
      <span style={{fontSize:17}}>Please use http or https in URL to verify. Add the meta tag to your site header and click verify button to verify your ownership.Please use http or https in URL to verify. Add the meta tag to your site header and click verify button to verify your ownership.</span>
      <Row style={{marginTop:15}}>
      <Input
        size="large"
        placeholder="Meta Key"
        style={{width:500}}
      />
      </Row>
      <Row className={classes.btnContainer}>
        <Button size='large' className={classes.btnStyle}>Next</Button>
      </Row>
    </Row>
  </>)
}




const VerifyOwnershipCard = ({imgSrc, details, itemKey, onClickContent, isSelected}) => {

  return(
    <Col xs={24} md={8}>
      <Card hoverable onClick={() => onClickContent(itemKey)}> 
      {isSelected === true ?
        <>
          <Row style={{textAlign:'center'}}> 
          <Avatar size={64} icon="user" src={imgSrc} alt='...loading' style={{backgroundColor:'#00bcd4'}}/>
          </Row>
          <Row style={{textAlign:'center', marginTop:20}}>
            <span style={avatarSubDetailSelected}>{details}</span>
          </Row>
        </>
         :
         <>
          <Row style={{textAlign:'center'}}> 
          <Avatar size={64} icon="user" src={imgSrc} alt='...loading' style={{backgroundColor:'#dbdcde'}}/>
          </Row>
          <Row style={{textAlign:'center', marginTop:20}}>
            <span style={avatarSubDetailUnselected}>{details}</span>
          </Row>
        </>
      }
      </Card>
    </Col>
  );
}


const VerifyOwnership = () => {

  const [content, setContent] = useState(<HtmlFileContent/>);
  const [oneSelected, setSelectedOne] = useState(true);
  const [twoSelected, setSelectedTwo] = useState(false);
  const [threeSelected, setSelectedThree] = useState(false);

  const onClickContent = value => {
    console.log(value);

    if ( value === 1 || null) {
      setContent(<> <HtmlFileContent/> </>);
      setSelectedOne(true);
      setSelectedTwo(false);
      setSelectedThree(false);
    } else if (value === 2) {
      setContent(<> <TXTRecordContent/></>);
      setSelectedOne(false);
      setSelectedTwo(true);
      setSelectedThree(false);
    } else {
      setContent(<> <MeteKeyContent/> </>);
      setSelectedOne(false);
      setSelectedTwo(false);
      setSelectedThree(true);
    }
  }


  return(
    <Card className={classes.verifyOwnership}>
      <Row>
      <h5>
        {'We Have Three Methods To verify Ownership'}
        <span>{'(Choose One)'}</span>
      </h5>

      </Row>
   
      <Row gutter={16}>
        <VerifyOwnershipCard imgSrc={HtmlImage} itemKey={1} onClickContent={onClickContent} isSelected={oneSelected}
          details='1. Verify Domain using HTML File'
        />
        <VerifyOwnershipCard imgSrc={TxtImage} itemKey={2} onClickContent={onClickContent} isSelected={twoSelected}
          details='2. Verify Domain using TXT Record'
        />
        <VerifyOwnershipCard imgSrc={KeyImage} itemKey={3} onClickContent={onClickContent} isSelected={threeSelected}
          details='3. Verify Domain using Meta Key'
        />
      </Row>
      <Row>
        <div>{content}</div>
        
      </Row>
     
    </Card>
  );
}

export default VerifyOwnership;