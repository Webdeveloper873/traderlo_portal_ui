import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Slider, Divider, Card, Typography, Select, Checkbox } from 'antd';

//components
import PageWrapper from 'common/components/PageWrapper';
// import Divider from 'common/components/Divider';
import Banner from './Banner';

//styles
import classes from './styles.module.scss';

const {Text} = Typography;
const {Option} = Select;

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
  const [domainPrice, setDomainPrice] = useState([0, 20]);
  const [domainAge, setDomainAge] = useState([0, 20]);
  const [domainLength, setDomainLength] = useState([0, 20]);
  const [timeRemaining, setTimeRemaining] = useState([0, 20]);

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
        <Select className={classes.inputField} placeholder='- Select -'>
          <Option value=".com">.com</Option>
          <Option value=".in">.in</Option>
          <Option value=".co">.co</Option>
        </Select>

        <Text strong>Include Only</Text>
        <Divider className={classes.divider} />
        <Checkbox.Group>
          <Col>
            <Checkbox value='reverseMet'>Reverse Met</Checkbox>
          </Col>
          <Col>
            <Checkbox value='buyNow'>Buy It Now</Checkbox>
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
        <Select className={classes.inputField} placeholder='- Select -'>
          <Option value="editorsChoice">Editor's Choice</Option>
          <Option value="regOption">Regular Options</Option>
        </Select>
      </Card>
    </>
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