/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slider, Divider, Card, Typography, Select, Checkbox, Input, Row, Col, Button, notification } from 'antd';
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
import { routes } from 'common/constants';

const { Text } = Typography;
const { Option } = Select;
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
  const [loading, setLoading] = useState(false);
  const [domainMinPrice, setDomainMinPrice] = useState(0);
  const [domainMaxPrice, setDomainMaxPrice] = useState(0);
  const [domainAge, setDomainAge] = useState([0, 20]);
  const [domainLength, setDomainLength] = useState([0, 20]);
  const [timeRemaining, setTimeRemaining] = useState([0, 20]);
  const [listingType, setListingType] = useState('');
  const [extension, setExtension] = useState('');
  const [isReserve, setReverseMet] = useState(false);
  const [isBuyNow, setBuyNow] =useState(false);
  const [filterContainer, setFilterContainer] = useState([]);
  const [filterIncludeChecker, setFilterIncludeChecker] = useState({
      minPrice: false,
      maxPrice: false,
      minAge: false,
      maxAge: false,
      minLength: false,
      maxLength: false,
      minTimeRemaining: false,
      maxTimeRemaining: false,
      listingType: false,
      extension: false,
      isReserve: false,
      isBuyNow: false,
  });
  const onChangeMinPrice = (e) => {
    console.log(e.target.value);
    if(e.target.value > 0 || (e.target.value !== domainMinPrice)){
      setFilterIncludeChecker({...filterIncludeChecker, minPrice:true});
    } else {
      setFilterIncludeChecker({...filterIncludeChecker, minPrice:false});
    }
    setDomainMinPrice(e.target.value);
  }

  const onChangeMaxPrice = (e) => {
    if(e.target.value > 0 || (e.target.value !== domainMaxPrice)){
      setFilterIncludeChecker({...filterIncludeChecker, maxPrice:true});
    }else {
      setFilterIncludeChecker({...filterIncludeChecker, minPrice:false});
    }
    setDomainMaxPrice(e.target.value);
  }

  const onChangeDomAge = value => {
      setDomainAge(value);
      setFilterIncludeChecker({...filterIncludeChecker, minAge:true, maxAge:true}); 
  }

  const onChangeDomLength = value => {
    setDomainLength(value);
    setFilterIncludeChecker({...filterIncludeChecker, minLength:true, maxLength:true});
  }

  const onChangeTimeRem = value => {
    setTimeRemaining(value);
    setFilterIncludeChecker({...filterIncludeChecker, minTimeRemaining:true, maxTimeRemaining:true});
  }

  const handleChangeListingType = value => {
    setListingType(value)
    setFilterIncludeChecker({...filterIncludeChecker, listingType:true});
  }

  const handleChangeExtension = value => {
    setExtension(value)
    setFilterIncludeChecker({...filterIncludeChecker, extension:true});
  }

  const onChangeReverseMet = value => {
    setReverseMet(value.target.checked);
    setFilterIncludeChecker({...filterIncludeChecker, isReserve:true});
  }

  const onChangeBuyNow = value => {
    setBuyNow(value.target.checked);
    setFilterIncludeChecker({...filterIncludeChecker, isBuyNow:true});
  }

  const handleApplyFilter = () => {
    setLoading(true);
    // const filter = {
    //   minPrice: domainPrice[0],
    //   maxPrice: domainPrice[1],
    //   minAge: domainAge[0],
    //   maxAge: domainAge[1],
    //   minLength: domainLength[0],
    //   maxLength: domainLength[1],
    //   minTimeRemaining: timeRemaining[0],
    //   maxTimeRemaining: timeRemaining[1],
    //   listingType: listingType,
    //   extension: extension,
    //   isReserve: isReserve,
    //   isBuyNow: isBuyNow,
    // }

    // check which item send as query to filter in API
    if (filterIncludeChecker.minPrice) {
      filterContainer.push(`minPrice=${domainMinPrice}&`)
    }
    if (filterIncludeChecker.maxPrice) {
      filterContainer.push(`maxPrice=${domainMaxPrice}&`)
    }
    if (filterIncludeChecker.minAge || filterIncludeChecker.maxAge) {
      filterContainer.push(`minAge=${domainAge[0]}&maxAge=${domainAge[1]}&`)
    }
    if (filterIncludeChecker.minLength || filterIncludeChecker.maxLength) {
      filterContainer.push(`minAge=${domainLength[0]}&maxAge=${domainLength[1]}&`)
    }
    if (filterIncludeChecker.minTimeRemaining || filterIncludeChecker.maxTimeRemaining) {
      filterContainer.push(`minAge=${timeRemaining[0]}&maxAge=${timeRemaining[1]}&`)
    }
    if (filterIncludeChecker.listingType) {
      //filterContainer.push(`minAge=${timeRemaining[0]}&maxAge=${timeRemaining[1]}&`)
    }
    if (filterIncludeChecker.extension) {
      //filterContainer.push(`isReserve=${isReserve}&`)
    }
    if (filterIncludeChecker.isReserve) {
      filterContainer.push(`isReserve=${isReserve}&`)
    }
    if (filterIncludeChecker.isBuyNow) {
      filterContainer.push(`isBuyNow=${isBuyNow}&`)
    }

    console.log(filterContainer,'filterContainer after');
    // flatten the array and convert to string
    const joinedFilters = filterContainer.join('').slice(0, -1)
    console.log(joinedFilters,'joinedFilters')

    // const filter = `minLength=${domainLength[0]}&maxLength=${domainLength[1]}&minAge=${domainAge[0]}&maxAge=${domainAge[1]}&minPrice=${domainMinPrice}&maxPrice=${domainMinPrice}&isReserve=${isReserve}&isBuyNow=${isBuyNow}&minTimeRemaining=${timeRemaining[0]}&maxTimeRemaining=${timeRemaining[1]}`
 
    dispatch(buyingDomain.getBuyDomain(joinedFilters));
    setFilterContainer([]);

    console.log(filterContainer,'filterContainer');
    setTimeout(() => {
      setLoading(false);
      notification.success({
        className: classes.successNotif,
        message: 'Filter Success!',
      });
    }, 3000);

   
  }

  return(
    <>
      <Card className={classes.filters}>
        <Text strong>Domain Price</Text>
        <Divider className={classes.divider} />
        min:
        <Input placeholder="min price" suffix="$" name='minPrice' style={{marginBottom:5}} value={domainMinPrice}  onChange={onChangeMinPrice}/>
        max:
        <Input placeholder="max price" suffix="$" name='maxPrice' style={{marginBottom:10}} value={domainMaxPrice}  onChange={onChangeMaxPrice}/>

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
        <Button onClick={handleApplyFilter} type="primary" loading={loading} disabled={loading}> Apply Filter</Button>
      </Card>
    </>
  );
}

const SearchKeyword = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const domainList = useSelector(({ buyDomain }) => buyDomain.domainList);
  const [viewDetails, setViewDetails] = useState(false);
  // const [placement, setPlacement] = useState('');
  // const [sortBy, setSort] = useState('');

  if(viewDetails){
    return <Redirect to={routes.DOMAINS_VIEW_PAGE} />;
  }

  const onClickCardItem = (value) => {
    dispatch(buyingDomain.getBuyDomainById(value))
    setViewDetails(true);
  }

  const handleChangePlacement = value => {
    //setPlacement(value)
    setLoading(true);
    const placementFliter = `placement=${value}`
    dispatch(buyingDomain.getBuyDomain(placementFliter));
    setTimeout(() => {
      setLoading(false);
      notification.success({
        className: classes.successNotif,
        message: 'Placement Success!',
      });
    }, 4000);
  }

  const handleSortBy = value => {
    //setSort(value)
    setLoading(true);
    const sortByFliter = `sortBy=${value}`
    dispatch(buyingDomain.getBuyDomain(sortByFliter));

    setTimeout(() => {
      setLoading(false);
      notification.success({
        className: classes.successNotif,
        message: 'Sort Success!',
      });
    }, 4000);

  }

  return(
    <div className={classes.searchKeyword}>
      <div>
        <Input.Group compact className={classes.inputLeft}>
          <span className={classes.keywordLabel}>{`Keywords : `}</span>
          <Select style={{width: '125px'}} placeholder='Placement' onChange={handleChangePlacement} loading={loading} disabled={loading}>
            <Option value=" "></Option>
            <Option value="ANYWHERE">Anywhere</Option>
            <Option value="AT_START">At Start</Option>
            <Option value="AT_END">At End</Option>
            <Option value="EXACT">Exact</Option>
          </Select>
          <Input.Search style={{ width: '220px ' }} enterButton />
        </Input.Group>
      </div>
      <Divider/>
      <Row gutter={16}>
        <Col span={18}>
          <Typography.Title level={4}>{`Showing 1 - ${domainList.length} of ${domainList.length} results`}</Typography.Title>
        </Col>
        <Col span={6} className={classes.alignEnd}>
          <Select style={{ width: '100%' }} placeholder='Sort By:' onChange={handleSortBy} loading={loading} disabled={loading}>
          <Option value="MOST_RELEVANT">Most Relevant</Option>
            <Option value="MOST_RECENT">Most Recent</Option>
            <Option value="LOWEST_PRICE">Lowest Price</Option>
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