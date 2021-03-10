import React from "react";

import {Form } from '@themesberg/react-bootstrap';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({id, className, label, children}) =>{
  return (
    <Form.Group id={id} className={`mb-2 ${className != undefined ? className : ''}`}>
      <Form.Label>{label}</Form.Label>

      {children}

    </Form.Group>
  )
}