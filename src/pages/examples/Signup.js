import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
// import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";

import FormGroup from "../../reciclecode/FormGroup.js";
import FormHeader from "../../reciclecode/FormHeader.js";
import SignPage from "../../reciclecode/SignPage.js";

/*
Outros signup/login

Não sei se vai usar

<div className="mt-3 mb-4 text-center">
    <span className="fw-normal">or</span>
</div>
<div className="d-flex justify-content-center my-4">
    <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
        <FontAwesomeIcon icon={faFacebookF} />
    </Button>
    <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
        <FontAwesomeIcon icon={faTwitter} />
    </Button>
    <Button variant="outline-light" className="btn-icon-only btn-pil text-dark">
        <FontAwesomeIcon icon={faGithub} />
    </Button>
</div>
*/

// Dados para criar cada campo do form
const formsInputData = [
  {
    id:"email", 
    className:'', 
    textLabel:"Seu Email", 
    icon:faEnvelope,
    type:"email", 
    placeholder:"exemplo@exemplo.com", 
    required:true,
    autoFocus: true
  },
  {
    id:"password", 
    className:'', 
    textLabel: "Sua Senha", 
    icon:faUnlockAlt,
    type:"password", 
    placeholder:"Senha1234", 
    required:true
  },
  {
    id:"password", 
    className:'', 
    textLabel: "Confirme sua senha", 
    icon:faUnlockAlt,
    type:"password", 
    placeholder:"Senha12345", 
    required:true
  }
]

const restoPagina = () => {
  return (
<div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">

  <FormHeader/>

  <Form className="mt-4">
    {
      formsInputData.map(
        props => {
          return (<FormGroup formProps={props} />   )
        }
      )
    }                      

    <FormCheck type="checkbox" className="d-flex mb-4">
      <FormCheck.Input required id="terms" className="me-2" />
      <FormCheck.Label htmlFor="terms">
        I agree to the <Card.Link>terms and conditions</Card.Link>
      </FormCheck.Label>
    </FormCheck>

    <Button variant="primary" type="submit" className="w-100">
      Sign up
    </Button>
  </Form>

  <div className="d-flex justify-content-center align-items-center mt-4">
    <span className="fw-normal">
      Already have an account?
      <Card.Link as={Link} to={Routes.Signin.path} className="fw-bold">
        {` Login here `}
      </Card.Link>
    </span>
  </div>

</div>
  )

}

export default () => {
  return (
    
    <SignPage restoPagina={restoPagina}/>
  );
};
