import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

function Form3(props) {
	if (props.currentStep !== 3) {
    return null
  }
	return (
		<React.Fragment>				
			<Form.Row>
				<Form.Group as={Col} >
					<Form.Label>Establos</Form.Label>
					<Form.Control as="select" name='stables' value={props.stables} onChange={props.handleChange}>
						<option disabled value='elija'>Elija...</option>
						<option>Si</option>
						<option>No</option>
					</Form.Control>
				</Form.Group>
				<Form.Group as={Col} >
					<Form.Label>Piscina</Form.Label>
					<Form.Control as="select" name='pool' value={props.pool} onChange={props.handleChange}>
						<option disabled value='elija'>Elija...</option>
						<option>Si</option>
						<option>No</option>
					</Form.Control>
				</Form.Group>
				<Form.Group as={Col} >
					<Form.Label>Jacuzzi</Form.Label>
					<Form.Control as="select" name='jacuzzi' value={props.jacuzzi} onChange={props.handleChange}>
						<option disabled value='elija'>Elija...</option>
						<option>Si</option>
						<option>No</option>
					</Form.Control>
				</Form.Group>
			</Form.Row>	

			<Form.Row>
				<Form.Group as={Col} >
					<Form.Label>Turco</Form.Label>
					<Form.Control as="select" name='turkish' value={props.turkish} onChange={props.handleChange}>
						<option disabled value='elija'>Elija...</option>
						<option>Si</option>
						<option>No</option>
					</Form.Control>
				</Form.Group>
				<Form.Group as={Col} >
					<Form.Label>Sauna</Form.Label>
					<Form.Control as="select" name='sauna' value={props.sauna} onChange={props.handleChange}>
						<option disabled value='elija'>Elija...</option>
						<option>Si</option>
						<option>No</option>
					</Form.Control>
				</Form.Group>
				<Form.Group as={Col} >
					<Form.Label>Estudio</Form.Label>
					<Form.Control as="select" name='study' value={props.study} onChange={props.handleChange}>
						<option disabled value='elija'>Elija...</option>
						<option>Si</option>
						<option>No</option>
					</Form.Control>
				</Form.Group>
			</Form.Row>	

			<Form.Row>
				<Form.Group as={Col} >
					<Form.Label>Sala de cine</Form.Label>
					<Form.Control as="select" name='cinema' value={props.cinema} onChange={props.handleChange}>
						<option disabled value='elija'>Elija...</option>
						<option>Si</option>
						<option>No</option>
					</Form.Control>
				</Form.Group>
				<Form.Group as={Col} >
					<Form.Label>Salon de juegos</Form.Label>
					<Form.Control as="select" name='playroom' value={props.playroom} onChange={props.handleChange}>
						<option disabled value='elija'>Elija...</option>
						<option>Si</option>
						<option>No</option>
					</Form.Control>
				</Form.Group>
				<Form.Group as={Col} >
					<Form.Label>Chimeneas tradicionales</Form.Label>
					<Form.Control as="select" name='fireplaces' value={props.fireplaces} onChange={props.handleChange}>
						<option disabled value='elija'>Elija...</option>
						<option>Si</option>
						<option>No</option>
					</Form.Control>
				</Form.Group>
			</Form.Row>	

			<Form.Row>
				<Form.Group as={Col} >
					<Form.Label>Chimeneas a gas</Form.Label>
					<Form.Control as="select" name='gasFireplaces' value={props.gasFireplaces} onChange={props.handleChange}>
						<option disabled value='elija'>Elija...</option>
						<option>Si</option>
						<option>No</option>
					</Form.Control>
				</Form.Group>
				<Form.Group as={Col} >
					<Form.Label>Decks exteriores</Form.Label>
					<Form.Control as="select" name='decks' value={props.decks} onChange={props.handleChange}>
						<option disabled value='elija'>Elija...</option>
						<option>Si</option>
						<option>No</option>
					</Form.Control>
				</Form.Group>
				<Form.Group as={Col} >
					<Form.Label>Espejos de agua</Form.Label>
					<Form.Control as="select" name='waterMirrors' value={props.waterMirrors} onChange={props.handleChange}>
						<option disabled value='elija'>Elija...</option>
						<option>Si</option>
						<option>No</option>
					</Form.Control>
				</Form.Group>
			</Form.Row>	

			<Form.Row>
				<Form.Group as={Col} >
					<Form.Label>Cascadas</Form.Label>
					<Form.Control as="select" name='waterfalls' value={props.waterfalls} onChange={props.handleChange}>
						<option disabled value='elija'>Elija...</option>
						<option>Si</option>
						<option>No</option>
					</Form.Control>
				</Form.Group>
				<Form.Group as={Col} >
					<Form.Label>Kioscos</Form.Label>
					<Form.Control as="select" name='kiosk' value={props.kiosk} onChange={props.handleChange}>
						<option disabled value='elija'>Elija...</option>
						<option>Si</option>
						<option>No</option>
					</Form.Control>
				</Form.Group>
			</Form.Row>	

			<Form.Row>
				<Form.Group as={Col} >
					<Form.Label>Precio de venta</Form.Label>
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text">$</span>
						</div>
						<input className="form-control" type='number' min='1' name='price' value={props.price} onChange={props.handleChange}/>
						<div className="input-group-append">
							<span className="input-group-text">.00</span>
						</div>
					</div>
				</Form.Group>
				<Form.Group as={Col} >
					<Form.Label>Porcentaje de comision para Meraki</Form.Label>
					<Form.Control as="select" name='comission' value={props.comission} onChange={props.handleChange}>
						<option disabled value='elija'>Elija...</option>
						<option>3% Zona urbana</option>
						<option>4% Zona rural</option>
						<option>5% Venta prioritaria</option>
					</Form.Control>
				</Form.Group>
			</Form.Row>	

			<Button className="float-right" variant="primary" type="submit">
				Enviar
			</Button>
		</React.Fragment>
	);
}

export default Form3;
