import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Row, Jumbotron, InputGroup, Form, Button, Col, Image} from 'react-bootstrap';
import CountUp from 'react-countup';
import { Icon, message } from 'antd';
//components
import PageWrapper from 'common/components/PageWrapper';

//actions
import { subscribeToNewsletter, resetSubscribeResult } from 'appRedux/actions/home/subscribe';

//utils
import { useFormInput } from 'common/utils/hooks';

//styles
import classes from './styles.module.scss';

//assets
import NewsLetter1 from 'assets/newletter1.png';
import NewsLetter2 from 'assets/newletter2.png';
import NewsLetter3 from 'assets/newletter3.png';
import NewsLetter4 from 'assets/newletter4.png';


const DetailsList = ({imgSrc, title, subTitle}) => {
  return(
    <Col lg={{ span: 3 }} className={classes.details}>
      <div className={classes.detailsList}>
        <Image src={imgSrc} className={classes.imgList}/>
      </div>
      <div className={classes.detailsList}>
        <h3>
          <CountUp
            start={0}
            end={title}
            duration={2.75}
            separator=","
            />
        </h3>
        <span>{subTitle}</span>
      </div>
    </Col>
  );
}

const SubscribeLetter = () => {
  const emailInput = useFormInput();
  const dispatch = useDispatch();
  const subscribeResult = useSelector(({ subscribeNews }) => subscribeNews.subscribeResult);

  useEffect(()=>{
    if(subscribeResult){
      message.success('Subscribe to Newsletter success');
    }else if(subscribeResult === false){
      message.failed('Subscribe to Newsletter failed')
    }
    emailInput.reset();
    dispatch(resetSubscribeResult());
  }, [subscribeResult]);

  const onSubscribe = () => {
    dispatch(subscribeToNewsletter(emailInput.value));
  }

  return(
    <div className={classes.contentRow}>
      <Jumbotron className={`${classes.subsNewLetter}`}>
        <PageWrapper>
          <div className={classes.fullWidth}>
            <h1>Subscribe To Newsletter</h1>
            <span style={{
              fontWeight: 'bold',
              fontSize:16,
              color: '#888',
              marginBottom:30}}>Get notified about the next update</span>
            <Col lg={{span: 6, offset: 3}} className={`mb-3`} style={{marginTop:35}}>
              <InputGroup>
                <Form.Control aria-describedby='basic-addon1' style={{height:'auto'}}
                  placeholder="Email Address"
                  onChange={emailInput.handleInputChange}
                />
                <InputGroup.Append>
                  <Button onClick={onSubscribe} style={{backgroundColor:'#00bcd4',borderColor: '#00bcd4', textAlign:'center'}}>
                    <Icon type="arrow-right" style={{ fontSize:15, padding:10}}/>
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </div>
          <Row className={classes.fullWidth}>
            <DetailsList imgSrc={NewsLetter1} title={35682} subTitle='Active Listings'/>
            <DetailsList imgSrc={NewsLetter2} title={99500} subTitle='Users'/>
            <DetailsList imgSrc={NewsLetter3} title={45824890} subTitle='Item Sold'/>
            <DetailsList imgSrc={NewsLetter4} title={12068} subTitle='Transactions Done'/>
          </Row>
        </PageWrapper>
      </Jumbotron>
    </div>
  );
}

export default SubscribeLetter;