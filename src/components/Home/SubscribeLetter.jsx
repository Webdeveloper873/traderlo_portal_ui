import React from 'react';
import {Row, Jumbotron, InputGroup, Form, Button, Col, Image} from 'react-bootstrap';

//components
import PageWrapper from 'common/components/PageWrapper';

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
        <h3>{title}</h3>
        <span>{subTitle}</span>
      </div>
    </Col>
  );
}

const SubscribeLetter = () => {
  return(
    <div className={classes.contentRow}>
      <Jumbotron className={`${classes.subsNewLetter}`}>
        <PageWrapper>
          <div className={classes.fullWidth}>
            <h1>Subscribe To Newsletter</h1>
            <span className={classes.subTitle}>Get notified about the next update</span>
            <Col lg={{span: 6, offset: 3}} className={`mb-3`}>
              <InputGroup>
                <Form.Control aria-describedby='basic-addon1' />
                <InputGroup.Append>
                  <Button variant='primary'>Search</Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </div>
          <Row className={classes.fullWidth}>
            <DetailsList imgSrc={NewsLetter1} title='35,682' subTitle='Active Listings'/>
            <DetailsList imgSrc={NewsLetter2} title='99500' subTitle='Users'/>
            <DetailsList imgSrc={NewsLetter3} title='45,824,890' subTitle='Item Sold'/>
            <DetailsList imgSrc={NewsLetter4} title='12,068' subTitle='Transactions Done'/>
          </Row>
        </PageWrapper>
      </Jumbotron>
    </div>
  );
}

export default SubscribeLetter;