import React from 'react';
import {InputGroup, DropdownButton, Dropdown, Form, Button} from 'react-bootstrap';

const GlobalSearch = () => {
  return(
    <InputGroup className="mb-3">
      <DropdownButton
        as={InputGroup.Prepend}
        variant="outline-secondary"
        title="Dropdown"
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
      <Form.Control aria-describedby='basic-addon1' />
      <InputGroup.Append>
        <Button variant='primary'>Search</Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default GlobalSearch;