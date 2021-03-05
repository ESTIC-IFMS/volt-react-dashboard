import React, {useState} from "react";

import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
// import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {Form, Card, Button, FormCheck, InputGroup} from '@themesberg/react-bootstrap';

import FormInput from "../../reciclecode/FormInput.js";

const state = { password: '', passwordConfirm:''};

function PasswordConfirmer() {
	const [passwordOkay, setPasswordOkay] = useState(false);
	
	

	const setPassword = (event) => {
		
		state.password = event.target.value;

		// handleComparation((password == passwordConfirm))
	}

	const setPasswordConfirm = (event) => {
		state.passwordConfirm = event.target.value;
		const value = (state.password == state.passwordConfirm)
		handleConfirmPassword(value)
	}

	const handleConfirmPassword = (value) => {
		
		setPasswordOkay(value);

		console.log(`${state.password}->${state.passwordConfirm}, ${passwordOkay}`)
	}

	return (
		
		<div>

	    <FormInput id='password' className='' label='Sua Senha' inputComponent={
      () => {
        return (
          <InputGroup>
            <Form.Control required type="password" onChange={setPassword} placeholder="Senha" />
          </InputGroup>   
        )
      }
    }/>

    <FormInput id='password_confirm' className='' label='Confirme sua senha' inputComponent={
      () => {
        return (
          <InputGroup>
            <Form.Control required type="password" isValid={passwordOkay} isInvalid={!passwordOkay} placeholder="Senha" onChange={setPasswordConfirm}/>

			<Form.Control.Feedback type="invalid">Senhas diferentes.</Form.Control.Feedback>
			<Form.Control.Feedback type="valid">Tudo certo!</Form.Control.Feedback>
          </InputGroup>   
        )
      }
    }/>
    </div>
)
}

export default PasswordConfirmer;