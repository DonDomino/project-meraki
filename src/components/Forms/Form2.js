import React from 'react';
import { Form, Col } from 'react-bootstrap';

function Form2(props){
	if (props.currentStep !== 2) {
    return null
  } 
	return (
		<React.Fragment>
			<Form.Row>
				<Form.Group as={Col}>
					<Form.Label>Ciudad</Form.Label>
					<Form.Control as="select" name='city' value={props.city} onChange={props.handleChange}>
						<option disabled value='elija'>Elija...</option>							
						<option>Bogotá</option>
						<option>Cali</option>
						<option>Medellín</option>
					</Form.Control>
				</Form.Group>
				{props.city !== 'Medellín' ? 
				<Form.Group as={Col}>
					<Form.Label>Barrio</Form.Label>
					<Form.Control name='neighbor' value={props.neighbor} onChange={props.handleChange}/>
				</Form.Group>
				:
				<Form.Group as={Col}>
					<Form.Label>Barrio</Form.Label>
					<Form.Control as="select" name='neighbor' value={props.neighbor} onChange={props.handleChange}>
						<option disabled value='elija'>Elija...</option>								
						<option>Popular</option>
						<option>Santa Cruz</option>
						<option>Manrique</option>
						<option>Aranjuez</option>
						<option>Castilla</option>
						<option>Doce de Octubre</option>
						<option>Robledo</option>
						<option>Villa Hermosa</option>
						<option>Buenos Aires</option>
						<option>La Candelaria</option>
						<option>Laureles-Estadio</option>
						<option>La América</option>
						<option>San Javier</option>
						<option>El Poblado</option>
						<option>Guayabal</option>
						<option>Belén</option>
						<option>Envigado</option>
						<option>Poblado</option>
						<option>Sabaneta</option>
						<option>Palmas</option>
						<option>Oriente</option>
					</Form.Control>
				</Form.Group>}
			</Form.Row>

			<Form.Row>
				<Form.Group as={Col} >
					<Form.Label># Habitaciones</Form.Label>
					<Form.Control type='number' min="1" max="10" name='rooms' value={props.rooms} onChange={props.handleChange}/>
				</Form.Group>	
				<Form.Group as={Col} >
					<Form.Label># Habitaciones con baño</Form.Label>
					<Form.Control type='number' min="1" max="10" name='roomsWithBath' value={props.roomsWithBath} onChange={props.handleChange}/>
				</Form.Group>							
				<Form.Group as={Col} >
					<Form.Label># Habitaciones con baño y vestier</Form.Label>
					<Form.Control type='number' min="1" max="10" name='roomsWBAD' value={props.roomsWBAD} onChange={props.handleChange}/>
				</Form.Group>							
			</Form.Row>

			<Form.Row>
				<Form.Group as={Col} >
					<Form.Label># Salas</Form.Label>
					<Form.Control type='number' min="1" max="10" name='livings' value={props.livings} onChange={props.handleChange}/>
				</Form.Group>	
				<Form.Group as={Col} >
					<Form.Label># Baños sociales</Form.Label>
					<Form.Control type='number' min="1" max="10" name='socialBaths' value={props.socialBaths} onChange={props.handleChange}/>
				</Form.Group>	
				<Form.Group as={Col} >
					<Form.Label># Baños sociales con ducha</Form.Label>
					<Form.Control type='number' min="1" max="10" name='socialWshowers' value={props.socialWshowers} onChange={props.handleChange}/>
				</Form.Group>															
			</Form.Row>

			<Form.Row>
				<Form.Group as={Col} >
					<Form.Label># Parqueaderos</Form.Label>
					<Form.Control type='number' min="1" max="10" name='parkings' value={props.parkings} onChange={props.handleChange}/>
				</Form.Group>							
				<Form.Group as={Col} >
					<Form.Label>Zonas compartidas</Form.Label>
					<Form.Control name='sharedZones' value={props.sharedZones} onChange={props.handleChange} placeholder='Ingresa un texto'/>
				</Form.Group>			
				<Form.Group as={Col} >
					<Form.Label>Cocina integrada a sala y comedor</Form.Label>
					<Form.Control as="select" name='integralKitchen' value={props.integralKitchen} onChange={props.handleChange}>
						<option disabled value='elija'>Elija...</option>
						<option>Si</option>
						<option>No</option>
					</Form.Control>
				</Form.Group>							
			</Form.Row>

			<Form.Row>
				<Form.Group as={Col} >
					<Form.Label>Otros lujos</Form.Label>
					<div className="input-group mb-3">						
						<input className="form-control" name='luxury' value={props.luxury} onChange={props.handleChange} placeholder='Ingresa un texto'/>
					</div>
				</Form.Group>							
			</Form.Row>		
		</React.Fragment>
	);	
}

export default Form2;
