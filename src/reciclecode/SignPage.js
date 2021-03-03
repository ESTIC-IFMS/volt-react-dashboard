import React from "react";

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Card, Container } from '@themesberg/react-bootstrap';

import { Routes } from "../routes";
import BgImage from "../assets/img/illustrations/signin.svg";

export default ({restoPagina})=>{
	return (
		<main>
			<section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
				<Container>
					<p className="text-center">
						<Card.Link as={Link} to={Routes.DashboardOverview.path} className="text-gray-700">
							<FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
						</Card.Link>
					</p>

					<Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
						<Col xs={12} className="d-flex align-items-center justify-content-center">

						{restoPagina()}

						</Col>
					</Row>
				</Container>
			</section>
		</main>
	)
}