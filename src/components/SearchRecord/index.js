import React, { useState } from 'react';
import { Slider, Divider, Card, Typography, Select, Checkbox, Input, Row, Col } from 'antd';

//components
import PageWrapper from 'common/components/PageWrapper';
import CardItem from 'common/components/CardItem';
import Banner from './Banner';

//styles
import classes from './styles.module.scss';

//constants
import {responsiveConf} from 'common/constants';

const {Text} = Typography;
const {Option} = Select;
const {threeCol} = responsiveConf || {};


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

      <Row>
        <Col span={18}>
          <Typography.Title level={4}>Showing 1 - 30 of 12,076 results</Typography.Title>
        </Col>
        <Col span={6} className={classes.alignEnd}>
          <Select style={{ width: '125px' }} placeholder='Sort By:'>
            <Option value="beginning">opt1</Option>
            <Option value="anywhere">opt2</Option>
            <Option value="ending">opt3</Option>
          </Select>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col {...threeCol}>
          <CardItem />
        </Col>
        <Col {...threeCol}>
          <CardItem />
        </Col>
        <Col {...threeCol}>
          <CardItem />
        </Col>
      </Row>
    </div>
  );
}

const SearchRecord = ({title}) => {
  return(
    <>
      <Banner text={title} />
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