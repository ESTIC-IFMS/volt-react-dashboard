
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Form, Card, Button, FormCheck, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../routes";

import SignPage from "../../reciclecode/SignPage.js";

const restoPagina = () => {
  return (
    <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">

      <div className="text-center text-md-center mb-4 mt-md-0">
        <h3 className="mb-0">Entrar</h3>
      </div>

      <Form className="mt-4">
        <Form.Group id="email" className="mb-4">
          <Form.Label>Seu Email</Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faEnvelope} />
            </InputGroup.Text>
            <Form.Control autoFocus required type="email" placeholder="professor@ifms.edu.br" />
          </InputGroup>
        </Form.Group>

        <Form.Group>
          <Form.Group id="password" className="mb-4">
            <Form.Label>Senha</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faUnlockAlt} />
              </InputGroup.Text>
              <Form.Control required type="password" placeholder="Senha" />
            </InputGroup>
          </Form.Group>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <Form.Check type="checkbox">
              <FormCheck.Input id="defaultCheck5" className="me-2" />
              <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Lembre de mim</FormCheck.Label>
            </Form.Check>
            <Card.Link className="small text-end">Esqueci a senha</Card.Link>
          </div>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Entrar  
        </Button>
      </Form>

      {/* <div className="mt-3 mb-4 text-center">
        <span className="fw-normal">or login with</span>
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
      </div> */}

      <div className="d-flex justify-content-center align-items-center mt-4">
        <span className="fw-normal">
          {/* Not registered? */}
          <Card.Link as={Link} to={Routes.Signup.path} className="fw-bold">
            {` Crie uma conta `}
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
