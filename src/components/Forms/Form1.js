import React from 'react';
import { Form, Col } from 'react-bootstrap';

function Form1(props){
  if (props.currentStep !== 1) {
    return null
  } 
  return (
    <React.Fragment>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Descripcion breve</Form.Label>
          <Form.Control required name='description' value={props.description} onChange={props.handleChange} placeholder='Ingresa una breve descripcion del inmueble'/>
          <Form.Control.Feedback type="invalid">
            Ingresa una descripcion
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Tipo de propiedad</Form.Label>
          <Form.Control as="select" name='propType' value={props.propType} onChange={props.handleChange}>	
            <option disabled value='elija'>Elija...</option>							
            <option>Apartamento</option>
            <option>Apartaestudio</option>
            <option>Casa</option>
            <option>Lote</option>
            <option>Bodega</option>
            <option>Local</option>
          </Form.Control>
        </Form.Group>						
      </Form.Row>
      
      <Form.Row>						
        <Form.Group as={Col}>
          <Form.Label># de pisos</Form.Label>
          <Form.Control type='number' min="1" max="200" name='floors' value={props.floors} onChange={props.handleChange}/>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Amoblado</Form.Label>
          <Form.Control as="select" name='furniture' value={props.furniture} onChange={props.handleChange}>
            <option disabled value='elija'>Elija...</option>							
            <option>Si</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Area</Form.Label>							
          <div className="input-group mb-3">
            <Form.Control name='area' value={props.area} onChange={props.handleChange} type='number' min="1"/>
            <div className="input-group-append">
              <span className="input-group-text">m<sup>2</sup></span>
            </div>
          </div>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Estrato</Form.Label>
          <Form.Control type='number' min="1" max="6" name='stratum' value={props.stratum} onChange={props.handleChange}/>							
        </Form.Group>	
        <Form.Group as={Col} controlId="ancient">
          <Form.Label>Antiguedad</Form.Label>
          <Form.Control as="select" name='ancient' value={props.ancient} onChange={props.handleChange}>
            <option disabled value='elija'>Elija...</option>							
            <option>Nuevo</option>
            <option>1-5 años</option>
            <option>5-10 años</option>
            <option>10-15 años</option>
            <option>15-20 años</option>
            <option>+ 20 años</option>
          </Form.Control>
        </Form.Group>							
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Fotos</Form.Label>
          <div className="input-group mb-3">
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="inputGroupFile02"/>
              <label className="custom-file-label" htmlFor="inputGroupFile02">Examinar...</label>
            </div>
          </div>	
        </Form.Group>
      </Form.Row>
    </React.Fragment>   
  );
}

export default Form1;
