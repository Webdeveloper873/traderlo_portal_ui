import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button, Input, Row, Select, Form } from 'antd';

//action
import { domain } from 'appRedux/actions/selling';

//styles
import classes from '../styles.module.scss';

//utils
import { useFormInput } from 'common/utils/hooks';

const { TextArea } = Input;
const { Option } = Select;

const ThePitch = ({ setActiveKey, form }) => {
  const listingId = useSelector(({ sellDomain }) => sellDomain.listingId);
  const categories = useSelector(({ sellDomain }) => sellDomain.categories);
  const pitch = useSelector(({ sellDomain }) => sellDomain.pitch);
  const tagline = useFormInput();
  const description = useFormInput();
  const dispatch = useDispatch();
  const [selectedCateg, setSelectedCateg] = useState('');
  const { getFieldDecorator } = form || {};

  // const onClickNext = () => {
  //   const data = {
  //     args: {
  //       tagline: tagline.value,
  //       description: description.value,
  //       categoryId: selectedCateg,
  //     },
  //     listingId,
  //   };
  //   dispatch(domain.setPitch(data));
  // }

  const onClickNext = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const { categoryId, tagline, description } = values || {};
        const data = {
          args: {
            tagline,
            description,
            categoryId,
          },
          listingId,
        };
        dispatch(domain.setPitch(data));
      }
    });
  };

  const handleCategChange = value => {
    setSelectedCateg(value)
  }

  useEffect(()=>{
    console.log('getPitchCateg useEffect');
    dispatch(domain.getPitchCateg());
  }, []);

  if(!listingId){
    console.log('listingId null');
  }

  if(pitch){
    setActiveKey(2);
  }

  return(
    <div className={classes.thePitch}>
      <Card className={classes.cardStyle}>
        <h5 className={classes.fontDecorH5}>Describe Your Product</h5>
        <div className={classes.subDetails}>
          <div className={classes.fontDecor}>Get in front of buyers looking for website like your by categorizing it accurately, and letting them know how long the website has been live.</div>
        </div>
        <div>
          <Row>
            <h5 className={classes.fontDecorH5}>Sublisting Category *</h5>
            <Form.Item>
              {getFieldDecorator('categoryId', {
                rules: [{ required: true, message: 'This field is required!' }],
              })(
                <Select size='large' placeholder={'-Select Category-'} style={{ width: 320, marginBottom: '10px' }} onChange={handleCategChange}>
                  {categories && categories.map(details => <Option value={details.id}>{details.name}</Option>)}
                </Select>
              )}
            </Form.Item>
          </Row>
          <Row>
            <h5 className={classes.fontDecorH5}>Description Heading *</h5>
            <Form.Item>
              {getFieldDecorator('tagline', {
                rules: [{ required: true, message: 'This field is required!' }],
              })(
                <Input
                  size="large"
                  className={classes.descriptionHeading}
                  placeholder="Enter description heading"
                  // onChange={tagline.handleInputChange}
                />
              )}
            </Form.Item>
          </Row>
          <Row>
            <h5 className={classes.fontDecorH5}>Description *</h5>
            <Form.Item>
              {getFieldDecorator('description', {
                rules: [{ required: true, message: 'This field is required!' }],
              })(
                <TextArea rows={8} className={classes.description}
                  // onChange={description.handleInputChange}
                  placeholder="Enter description"
                />
              )}
            </Form.Item>
          </Row>
          <Row className={classes.btnContainer}>
            <Button size='large' className={classes.btnStyle} onClick={onClickNext}>Next</Button>
          </Row>
        </div>
      </Card>
    </div>
  )
}

const WrappedPitch = Form.create({ name: 'thePitch' })(ThePitch);

export default WrappedPitch;