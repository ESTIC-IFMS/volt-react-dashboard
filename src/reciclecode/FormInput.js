import React from "react";

import {Form } from '@themesberg/react-bootstrap';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({id, className, label, inputComponent}) =>{
  return (
    <Form.Group id={id} className={`mb-4 ${className != undefined ? className : ''}`}>
      <Form.Label>{label}</Form.Label>

      {inputComponent()}

    </Form.Group>
  )
}