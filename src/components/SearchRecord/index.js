import React from 'react';
import { Card, Col, Button, DropdownButton, Dropdown } from 'react-bootstrap';

//components
import PageWrapper from 'common/components/PageWrapper';
import Divider from 'common/components/Divider';
import Banner from './Banner';

//styles
import classes from './styles.module.scss';

const Filters = () => {
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
      <span className={classes.filterLabel}>Price Range</span>
      <span className='input-group-addon'>to</span>
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