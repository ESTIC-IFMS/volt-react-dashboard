import React from "react";

import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
// import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {Form, Card, Button, FormCheck, InputGroup} from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../routes";

import FormInput from "../../reciclecode/FormInput.js";
import FormHeader from "../../reciclecode/FormHeader.js";
import SignPage from "../../reciclecode/SignPage.js";

// Posteriormente, transformar a senha, confirmar senha em um componente

const teste = (e) => {
  console.log(e.target.value)
}

const restoPagina = () => {
  return (
<div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">

  <FormHeader/>

  <Form className="mt-4" onSubmit={teste}>

    <Form.Group>
      <Form.Control type='hidden' value='1' name='user_type'/>
    </Form.Group>

    <Form.Group>
      <Form.Control type='hidden' value='1' name='user_id'/>
    </Form.Group>

    <FormInput id='name' className='' label='Nome Completo' inputComponent={
      () => {
        return(
          <InputGroup>
            <Form.Control required type='text' name='username' placeholder='Nome Completo' onChange={teste} />
          </InputGroup>
        )
      }
    } />

    <FormInput id='email' className='' label='Email' inputComponent={
      () => {
        return(
          <InputGroup>
            <Form.Control required type='text' name='email' placeholder='professor@email.com' onChange={teste} />
          </InputGroup>
        )
      }
    } />

    <FormInput id='phone' className='' label='Telefone/Celular' inputComponent={
      () => {
        return(
          <InputGroup>
            <Form.Control required type='tel' name='phone' min='9' max='12' placeholder='67 9999-9999' onChange={teste} />
          </InputGroup>
        )
      }
    } />

    <FormInput id='birthdate' className='' label='Data de Nascimento' inputComponent={
      () => {
        return(
          <InputGroup>
            <Form.Control required type='date' name='birthdate' onChange={teste} />
          </InputGroup>
        )
      }
    } />

    <FormInput id='sex' className='' label='Sexo' inputComponent={
      () => {
        return (
          <Form.Select required name='genre' onChange={teste}>
            <option defaultValue value='0'>Selecione...</option>
            <option value='Masculino'>Masculino</option>
            <option value='Feminino'>Feminino</option>
          </Form.Select>    
        )
      }
    }/>

    <FormInput id='state' className='' label='Estado' inputComponent={
      () => {
        return (
          <InputGroup>
           <Form.Control required type='text' name='state' onChange={teste} />
          </InputGroup>
        )
      }
    }/>

    <FormInput id='city' className='' label='Cidade' inputComponent={
      () => {
        return (
          <InputGroup>
           <Form.Control required type='text' name='city' onChange={teste} />
          </InputGroup>
        )
      }
    }/>

    <FormInput id='academic_degree' className='' label='Formação Academica' inputComponent={
      () => {
        return (
          <Form.Select required name='academic_degree' onChange={teste}>
            <option defaultValue value='0'>Selecione...</option>
            <option value='Graduação'>Graduação</option>
            <option value='Mestrado'>Mestrado</option>
            <option value='Doutorado'>Doutorado</option>
          </Form.Select>    
        )
      }
    }/>

    <FormInput id='siap' className='' label='SIAP' inputComponent={
      () => {
        return (
          <InputGroup>
           <Form.Control required type='text' name='siap' onChange={teste} />
          </InputGroup>
        )
      }
    }/>

    <FormInput id='school' className='' label='Escola' inputComponent={
      () => {
        return (
          <Form.Select required name='school_id' onChange={teste}>
            <option defaultValue value='0'>Selecione...</option>
            <option value={1}>Escola Tal Tal</option>
            <option value={2}>Escola de Tal Tel</option>
          </Form.Select>    
        )
      }
    }/>

    <FormInput id='teacher_code' className='' label='Codigo do Professor' inputComponent={
      () => {
        return (
          <InputGroup>
           <Form.Control required type="text" placeholder="CODIGO" />
          </InputGroup>   
        )
      }
    }/>

    <FormInput id='password' className='' label='Sua Senha' inputComponent={
      () => {
        return (
          <InputGroup>
            <Form.Control required type="password" placeholder="Senha" />
          </InputGroup>   
        )
      }
    }/>

    <FormInput id='password_confirm' className='' label='Confirme sua senha' inputComponent={
      () => {
        return (
          <InputGroup>
            <Form.Control required type="password" placeholder="Senha" />
          </InputGroup>   
        )
      }
    }/>

    <FormInput id='photo' className='' label='Foto' inputComponent={
      () => {
        return (
         <Form.Control required type="file" />
        )
      }
    }/>

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
