import React from 'react';
import {InputGroup, DropdownButton, Dropdown, Form, Button} from 'react-bootstrap';
import { Icon } from 'antd';

const GlobalSearch = () => {
  return(
    <InputGroup className="mb-3" style={{marginTop:15, paddingTop:15, paddingBottom:15}}>
      <DropdownButton
        as={InputGroup.Prepend}
        variant="outline-secondary"
        title="Domains"
        id="input-group-dropdown-1"
        
      >
        <Dropdown.Item>Website</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Domain</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Template/Graphics</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Clone Scripts</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Plugins/Themes</Dropdown.Item>
      </DropdownButton>
      <Form.Control aria-describedby='basic-addon1' style={{height:'auto'}} placeholder="Type Brand,Name of your Choice"/>
      <InputGroup.Append>
        <Button style={{backgroundColor:'#00bcd4',borderColor: '#00bcd4', textAlign:'center'}}><Icon type="search" style={{ fontSize:25, padding:10}} /></Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default GlobalSearch;