import React, {useState} from "react";

import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
// import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {Form, Card, Button, FormCheck, InputGroup} from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../routes";

import FormInput from "../../reciclecode/FormInput.js";
import FormHeader from "../../reciclecode/FormHeader.js";
import SignPage from "../../reciclecode/SignPage.js";
import PasswordConfirmer from "../../components/form/PasswordConfirmer.js"
// Posteriormente, transformar a senha, confirmar senha em um componente

const teste = (e) => {
  console.log(e.target.value)
}

function sendCreateAccountResquest (data) {
	//...
}

const RestoPagina = (props) => {
	// consts for post request
	const user_type = 1;
	const user_id = 1;

	const [data, setData] = useState({
		// Fixed data
		"user_type": 			user_type,
		"user_id": 			user_id,

		// Form data
		firstname: 			'',
		lastname: 			'',
		phone: 				'',
		email:  			'',
		birthdate:  		'',
		genre: 				'',
		state:  			'',
		city: 				'',
		"academic_degree": 	'',
		siap: 				'',
		"school_id": 		-1,
		"teacher_code":  	'',
		//"photo": 			

	});

	const handleChange = (e) => {
        const {name , value} = e.target   
        setData(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

	return (
		<div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">

			<FormHeader  text="Cadastro"/>

			<Form className="mt-4">

				<FormInput id='name' className='' label='Nome' >
					<InputGroup >            
						<Form.Control 
							required 
							type='text' 
							name='firstname' 
							placeholder='Nome'
							value={data.firstname} 
							onChange={handleChange} 
						/>
					</InputGroup>
				</FormInput>

				<FormInput id='lastname' className='' label='Sobrenome'>
					<InputGroup>            
						<Form.Control 
							required 
							type='text' 
							name='lastname'  
							value={data.lastname} 
							placeholder='Sobrenome' 
							onChange={handleChange} 
						/>
					</InputGroup>	
				</FormInput>


				<FormInput id='email' className='' label='Email'>
					<InputGroup>
						<Form.Control 
							required 
							type='text' 
							name='email' 
							value={data.email} 
							placeholder='professor@email.com' 
							onChange={handleChange} 
						/>
					</InputGroup>
				</FormInput>

				<FormInput id='phone' className='' label='Telefone/Celular'>
					<InputGroup>
						<Form.Control 
							required 
							type='tel' 
							name='phone' 
							value={data.phone} 
							min='9' 
							max='12' 
							placeholder='67 9999-9999' 
							onChange={handleChange}
						/>
					</InputGroup>
				</FormInput>

				<FormInput id='birthdate' className='' label='Data de Nascimento'  >
					<InputGroup>
						<Form.Control 
							required 
							type='date' 
							name='birthdate' 
							value={data.birthdate} 
							onChange={handleChange} 
						/>	
					</InputGroup>
				</FormInput>

				<FormInput id='sex' className='' label='Sexo'>
					<Form.Select required name='genre' onChange={handleChange}>
						<option defaultValue value='0'>Selecione...</option>
						<option value='Masculino'>Masculino</option>
						<option value='Feminino'>Feminino</option>
					</Form.Select>    
				</FormInput>


				<FormInput id='state' className='' label='Estado'>
					<InputGroup>
						<Form.Control 
							required
							type='text'
							name='state'
							value={data.state} 
							onChange={handleChange} 
						/>
					</InputGroup>
				</FormInput>

				<FormInput id='city' className='' label='Cidade'>
					<InputGroup>
						<Form.Control 
							required 
							type='text' 
							name='city' 
							value={data.city} 
							onChange={handleChange} 
						/>
					</InputGroup>
				</FormInput>

				<FormInput id='academic_degree' className='' label='Formação Academica'>
					<Form.Select required name='academic_degree' onChange={handleChange}>
						<option defaultValue value='0'>Selecione...</option>
						<option value='Graduação'>Graduação</option>
						<option value='Mestrado'>Mestrado</option>
						<option value='Doutorado'>Doutorado</option>
					</Form.Select>    	
				</FormInput>

				<FormInput id='siap' className='' label='SIAP'>
					<InputGroup>
						<Form.Control 
							required 
							type='text' 
							name='siap' 
							value={data.siap} 
							onChange={handleChange} 
						/>
					</InputGroup>
				</FormInput>

				<FormInput id='school' className='' label='Escola'>
					<Form.Select required name='school_id' onChange={handleChange}>
						<option defaultValue value='0'>Selecione...</option>
						<option value={1}>Escola Tal Tal</option>
						<option value={2}>Escola de Tal Tel</option>
					</Form.Select>    
				</FormInput>

				<FormInput id='teacher_code' className='' label='Codigo do Professor' >
					<InputGroup>
						<Form.Control 
							required 
							type="text" 
							name="teacher_code"
							value={data['teacher_code']} 
							placeholder="CODIGO" 
						/>
					</InputGroup>   
				</FormInput>

				<PasswordConfirmer/>

				<FormInput id='photo' className='' label='Foto'>
					<Form.Control 
						required 
						type="file" 
					/>
				</FormInput>

				<FormCheck type="checkbox" className="d-flex mb-4">
					<FormCheck.Input required id="terms" className="me-2" />
					<FormCheck.Label htmlFor="terms">
						I agree to the <Card.Link>terms and conditions</Card.Link>
					</FormCheck.Label>
				</FormCheck>

				<Button variant="primary" className="w-100">
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
    
    <SignPage>
    	<RestoPagina/>
    </SignPage>
  );
};
