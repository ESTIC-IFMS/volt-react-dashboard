import React from "react";
import {Form, InputGroup } from '@themesberg/react-bootstrap';

export default ({formProps}) =>{
  return (
    <Form.Group id={formProps.id} className={`mb-4` + formProps.className}>
      <Form.Label>{formProps.textLabel}</Form.Label>

      <InputGroup>
        <InputGroup.Text>
          <FontAwesomeIcon icon={formProps.icon} />
        </InputGroup.Text>

        <Form.Control required={formProps.required} autoFocus={formProps.autoFocus} type={formProps.type} placeholder={formProps.placeholder} />
      </InputGroup>

    </Form.Group>
  )
}