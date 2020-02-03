import React, { useState } from 'react';
import { Card, Col, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { Slider, Input } from 'antd';

//components
import PageWrapper from 'common/components/PageWrapper';
import Divider from 'common/components/Divider';
import Banner from './Banner';

//styles
import classes from './styles.module.scss';

const Filters = () => {
  const [sliderRange, setSliderRange] = useState([0, 20]);
  const [domainRange, setDomainRange] = useState([0, 20]);
  const [timeRange, setTimeRage] = useState([0, 20]);

  const sliderOnChange = (value) => {
    console.log('onChange: ', value);
    setSliderRange(value);
  }

  const domainSliderOnChange = (value) => {
    setDomainRange(value);
  }
  
  const timeSliderOnChange = (value) => {
    setTimeRage(value);
  }

  return(
    <Card className={classes.filters} body>
      <div className='d-flex justify-content-between'>
        <span className={classes.label}>Filters</span>
        <Button variant="outline-info border-0">clear all</Button>
      </div>
      <Divider className={classes.divider} />
      <span className={classes.filterLabel}>Placement</span>
      <select className={`browser-default custom-select ${classes.inputField}`} defaultValue='1'>
        <option value="1">Anywhere</option>
        <option value="2">At the start</option>
        <option value="3">At the end</option>
        <option value="3">Exact</option>
      </select>
      <span className={classes.filterLabel}>Extensions</span>
      <select className={`browser-default custom-select ${classes.inputField}`}>
        <option value="1">.com</option>
        <option value="2">.net</option>
        <option value="3">.org</option>
        <option value="3">.io</option>
      </select>
      <span>{`${sliderRange[0]} - ${sliderRange[1]}`}</span>
      <Slider
        range
        step={1}
        max={20}
        defaultValue={[0, 20]}
        onChange={sliderOnChange}
      />

      <span className={classes.filterLabel}>Price Range</span>
      <Input style={{ width: 90, textAlign: 'center' }} placeholder="Minimum" />
      <Input
        style={{
          width: 30,
          borderLeft: 0,
          pointerEvents: 'none',
          backgroundColor: '#fff',
        }}
        placeholder="~"
        disabled
      />
      <Input style={{ width: 90, textAlign: 'center', borderLeft: 0 }} placeholder="Maximum" />

      <span className={classes.filterLabel}>Domain Age</span>
      <span>{`${domainRange[0]} month - ${domainRange[1]} years`}</span>
      <Slider
        range
        step={1}
        max={20}
        defaultValue={[0, 20]}
        onChange={domainSliderOnChange}
      />

      <span className={classes.filterLabel}>Include Only</span>
      <select className={`browser-default custom-select ${classes.inputField}`} defaultValue='1'>
        <option value="1">Nothing Selected</option>
        <option value="2">Reserve Met</option>
        <option value="3">But It Now</option>
      </select>

      <span className={classes.filterLabel}>Time Remaining</span>
      <span>{`${timeRange[0]} Day(s) - ${timeRange[1]} Days`}</span>
      <Slider
        range
        step={1}
        max={45}
        defaultValue={[0, 45]}
        onChange={timeSliderOnChange}
      />
    </Card>
  );
}


const SearchKeyword = () => {
  return(
    <div className={classes.searchKeyword}>

    </div>
  );
}

const SearchRecord = ({title}) => {
  return(
    <>
      <Banner text={title} />
      <PageWrapper className={classes.pageWrapper}>
        <Col xs={12} md={3}>
          <Filters />
        </Col>
        <Col xs={12} md={9}>
          <SearchKeyword />
        </Col>
      </PageWrapper>
    </>
  );
}

export default SearchRecord;