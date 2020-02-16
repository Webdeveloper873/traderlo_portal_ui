import React, {useState} from 'react';
import { Card, Row, Button, Col, Tabs, Avatar, Icon, Input } from 'antd';

//styles
import classes from '../styles.module.scss';

//resources
import HtmlImage from 'assets/selling/html.png';
import KeyImage from 'assets/selling/key.png';
import TxtImage from 'assets/selling/txt.png';

const HtmlFileContent = () => {

  return (<>
    <Row  className={classes.htmlFileContent}>
      <span className={classes.fontDecor}>Please click on the button to download the file and put it inside the root folder of the your site and then click on verify button below.Please click on the button to download the file and put it inside the root folder of the your site and then click on verify button below.</span>
      <Row >
        <Button type="link" size='large' className={classes.downloadButton}>Download  <Icon type="download" /></Button>
      </Row>
    </Row>
  </>)
}

const TXTRecordContent = () => {

  return (<>
    <Row className={classes.tXTRecordContent}>
      <span className={classes.fontDecor}>Please add the following TXT records to your DNS zone editor on your Website host and then click button to verify, the verification process maytake from 10 min to 24 hours</span>
      <Row >
        <Card className={classes.txtContentGreyArea} bordered={false}>
          <Row>
            <Col span={11} className={classes.txtContentInputBox}>
            <Input
              size="large"
              placeholder="URL"
            />
            </Col>
            <Col span={11} className={classes.txtContentInputBox}>
            <Input
              size="large"
              placeholder="Text Record"
            />
            </Col>
          </Row>
          <Row className={classes.txtContentInputText}>
            <span className={classes.fontDecor}>1. Copy the above Generated TXT records.</span>
          </Row>
          <Row className={classes.txtContentInputText2}>
            <span className={classes.fontDecor}>2. Sign in to your domain host.</span>
          </Row>
          <Row className={classes.txtContentInputText2}>
            <span className={classes.fontDecor}>3. Go to your domain's DNS records.</span>
          </Row>
          <Row className={classes.txtContentSubText}>
            <span className={classes.fontDecor}>a. For the record type, select TXT.</span>
          </Row>
          <Row className={classes.txtContentSubText}>
            <span className={classes.fontDecor}>b. In the Name/Host/Alias field, enter @ or leave it blank.</span>
          </Row>
          <Row className={classes.txtContentSubText}>
            <span className={classes.fontDecor}>c. Your host might require you to enter your domain, which looks like yourdomain.com, into this field. Your other DNS records might indicate what you should enter.</span>
          </Row>
          <Row className={classes.txtContentSubText}>
            <span className={classes.fontDecor}>d. In the Time to Live (TTL) field, enter 86400 or leave the default.</span>
          </Row>
          <Row className={classes.txtContentSubText}>
            <span className={classes.fontDecor}>e. In the Value/Answer/Destination field, paste the verification record you copied in step 1.</span>
          </Row>
          <Row className={classes.txtContentSubText}>
            <span className={classes.fontDecor}>f. Save the record.</span>
          </Row>
        </Card>
      </Row>
      <Row className={classes.btnContainer}>
        <Button size='large' className={classes.btnStyle}>Next</Button>
      </Row>
    </Row>
  </>)
}

const MetaKeyContent = () => {

  return (<>
    <Row className={classes.metaKeyContent}>
      <span className={classes.fontDecor}>Please use http or https in URL to verify. Add the meta tag to your site header and click verify button to verify your ownership.Please use http or https in URL to verify. Add the meta tag to your site header and click verify button to verify your ownership.</span>
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

  // className={`${classes.separator} ${children ? classes.midText : ''} ${className}`}
  return(
    <Col xs={24} md={8}>
      <Card hoverable onClick={() => onClickContent(itemKey)}> 
        <div className={classes.verifyOwnershipCard}>
          <Row style={{textAlign:'center'}}> 
            <Avatar size={64} icon="user" src={imgSrc} alt='...loading' 
              className={` ${isSelected === true ? classes.activeCard :  classes.inactiveCard}`}/>
          </Row>
          <Row className={classes.rowSubDetails}>
            <span className={` ${isSelected === true ? classes.subDetailSelected :  classes.subDetailUnselected}`}>
              {details}</span>
          </Row>
        </div>
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
      setContent(<> <MetaKeyContent/> </>);
      setSelectedOne(false);
      setSelectedTwo(false);
      setSelectedThree(true);
    }
  }


  return(
    <Card className={classes.verifyOwnership}>
      <Row className={classes.selectOptionFont}>
            <span className={classes.fontDecor}>We Have Three Methods To verify Ownership. (Choose one)</span>

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