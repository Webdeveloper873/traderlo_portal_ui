/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slider, Divider, Card, Typography, Select, Checkbox, Input, Row, Col, Button, Icon } from 'antd';
import { Redirect } from "react-router-dom";

//components
import PageWrapper from 'common/components/PageWrapper';
import CardItem from 'common/components/CardItem';
import Banner from 'common/components/Banner';

//actions
import { buyingDomain } from 'appRedux/actions/buying';

//styles
import classes from './styles.module.scss';

//constants
import {responsiveConf, routes} from 'common/constants';

const { Text } = Typography;
const { Option } = Select;
const { threeCol } = responsiveConf || {};
const { HorizontalList } = CardItem || {};


const SliderFilter = ({ sliderVal, amtLabel, ...props}) => {
  return(
    <>
      {sliderVal ? <span>{`${sliderVal[0]} ${amtLabel || ''} to ${sliderVal[1]} ${amtLabel || ''}`}</span> : null}
      <Slider range
        step={1}
        max={20}
        defaultValue={[0, 20]}
        {...props}
      />
    </>
  )
}

const Filters = () => {
  const dispatch = useDispatch();
  const [domainPrice, setDomainPrice] = useState([0, 20]);
  const [domainAge, setDomainAge] = useState([0, 20]);
  const [domainLength, setDomainLength] = useState([0, 20]);
  const [timeRemaining, setTimeRemaining] = useState([0, 20]);
  const [listingType, setListingType] = useState('');
  const [extension, setExtension] = useState('');
  const [isReverseMet, setReverseMet] = useState(false);
  const [isBuyNow, setBuyNow] =useState(false);

  const onChangeDomPrice = (value) => {
    setDomainPrice(value);
  }

  const onChangeDomAge = value => {
    setDomainAge(value);
  }

  const onChangeDomLength = value => {
    setDomainLength(value);
  }

  const onChangeTimeRem = value => {
    setTimeRemaining(value);
  }

  const handleChangeListingType = value => {
    setListingType(value)
  }

  const handleChangeExtension = value => {
    setExtension(value)
  }

  const onChangeReverseMet = value => {
    setReverseMet(value.target.checked);
  }

  const onChangeBuyNow = value => {
    setBuyNow(value.target.checked);
  }

  const handleApplyFilter = () => {

    const filter = {
      minPrice: domainPrice[0],
      maxPrice: domainPrice[1],
      minAge: domainAge[0],
      maxAge: domainAge[1],
      minLength: domainLength[0],
      maxLength: domainLength[1],
      minTimeRemaining: timeRemaining[0],
      maxTimeRemaining: timeRemaining[1],
      listingType: listingType,
      extension: extension,
      isReserve: isReverseMet,
      isBuyNow: isBuyNow,
    }

    console.log(filter,'filters');
    dispatch(buyingDomain.getBuyDomain(filter));
  }

  return(
    <>
      <Card className={classes.filters}>
        <Text strong>Domain Price</Text>
        <Divider className={classes.divider} />
        <SliderFilter sliderVal={domainPrice} onChange={(onChangeDomPrice)} />

        <Text strong>Domain Age</Text>
        <Divider className={classes.divider} />
        <SliderFilter sliderVal={domainAge} onChange={onChangeDomAge} />

        <Text strong>Domain Length</Text>
        <Divider className={classes.divider} />
        <SliderFilter sliderVal={domainLength} onChange={onChangeDomLength} amtLabel={'years'}/>
      </Card>

      <Card className={`${classes.filters} ${classes.filterCard}`}>
        <Text strong>Extensions</Text>
        <Divider className={classes.divider} />
        <Select className={classes.inputField} placeholder='- Select -' onChange={handleChangeExtension}>
          <Option value=".com">.com</Option>
          <Option value=".in">.in</Option>
          <Option value=".co">.co</Option>
        </Select>

        <Text strong>Include Only</Text>
        <Divider className={classes.divider} />
        <Checkbox.Group>
          <Col>
            <Checkbox value='reverseMet' onChange={onChangeReverseMet}>Reserve Met</Checkbox>
          </Col>
          <Col>
            <Checkbox value='buyNow' onChange={onChangeBuyNow}>Buy It Now</Checkbox>
          </Col>
        </Checkbox.Group>
      </Card>

      <Card className={`${classes.filters} ${classes.filterCard}`}>
        <Text strong>Time Remaining</Text>
        <Divider className={classes.divider} />
        <SliderFilter sliderVal={timeRemaining} onChange={onChangeTimeRem} amtLabel={'years'} />
      </Card>

      <Card className={`${classes.filters} ${classes.filterCard}`}>
        <Text strong>Listing Type</Text>
        <Divider className={classes.divider} />
        <Select className={classes.inputField} placeholder='- Select -' onChange={handleChangeListingType}>
          <Option value="editorsChoice">Editor's Choice</Option>
          <Option value="regOption">Regular Options</Option>
        </Select>
      </Card>
      <Card className={`${classes.filters} ${classes.filterCard}`}>
        <Button onClick={handleApplyFilter}> Apply Filter</Button>
      </Card>
    </>
  );
}


const SearchKeyword = () => {
  const dispatch = useDispatch();
  const domainList = useSelector(({ buyDomain }) => buyDomain.domainList);
  const [viewDetails, setViewDetails] = useState(false);
  const [viewMode, setViewMode] = useState('card-list'); //default card list view

  if(viewDetails){
    return <Redirect to={routes.DOMAINS_VIEW_PAGE} />;
  }

  const onClickCardItem = (value) => {
    dispatch(buyingDomain.getBuyDomainById(value))
    setViewDetails(true);
  }

  const onClickChangeView = (view) => {
    setViewMode(view);
  }


  return(
    <div className={classes.searchKeyword}>
      <Typography.Text level={4} strong>{`Keywords : `}</Typography.Text>
      <Input.Group compact className={classes.inputLeft}>
        <Select style={{width: '125px'}} placeholder='Placement'>
          <Option value="beginning">Beginning</Option>
          <Option value="anywhere">Any Where</Option>
          <Option value="ending">Ending</Option>
        </Select>
        <Input.Search style={{ width: '220px ' }} enterButton />
      </Input.Group>
      <Divider/>

      <Row gutter={16}>
        <Col span={18}>
          <Typography.Title level={4}>{`Showing 1 - ${domainList.length} of ${domainList.length} results`}</Typography.Title>
        </Col>
        <Col span={6} className={classes.alignEnd}>
          <Select style={{ width: '100%' }} placeholder='Sort By:'>
            <Option value="beginning">beginning</Option>
            <Option value="anywhere">anywhere</Option>
            <Option value="ending">ending</Option>
          </Select>
        </Col>
        {/* <Col span={2}>
          <Button type='primary' onClick={()=>onClickChangeView('card-list')}>
            <Icon type="appstore" className={classes.iconSize}/>
          </Button>
        </Col>
        <Col span={2}>
          <Button type='primary' onClick={()=>onClickChangeView('horizontal-list')}>
            <Icon type="unordered-list" className={classes.iconSize}/>
          </Button>
        </Col> */}
      </Row>
      <Row gutter={16}>
        {/*
        //remove grid view
        {domainList.map(itemProps => {
            return viewMode === 'card-list'? <Col {...threeCol}>
              <CardItem key={itemProps.id} onClick={() => onClickCardItem(itemProps)} {...itemProps} style={{marginBottom:20}}/>
            </Col> : <HorizontalList key={itemProps.id} onClick={() => onClickCardItem(itemProps)} {...itemProps} style={{marginBottom:20}}/>
        })}
          */}
        {domainList.map(itemProps => <HorizontalList key={itemProps.id} onClick={() => onClickCardItem(itemProps)} {...itemProps} style={{ marginBottom: 20 }} />)}
      </Row>
    </div>
  );
}

const SearchRecord = ({title}) => {
  const dispatch = useDispatch();
  const bannerPath = ['Home', 'Domains']

  useEffect(()=>{
    //this is initial login, fetch user profile
    console.log('dispatch getBuyDomain');
    dispatch(buyingDomain.getBuyDomain());
  }, []);

  return(
    <>
      <Banner text={'Domains'} path={bannerPath}/>
      <PageWrapper className={classes.pageWrapper}>
        <Col xs={24} md={6}>
          <Filters />
        </Col>
        <Col xs={24} md={18}>
          <SearchKeyword />
        </Col>
      </PageWrapper>
    </>
  );
}

export default SearchRecord;