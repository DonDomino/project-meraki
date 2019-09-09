import React from 'react';
import Form1 from '../components/Forms/Form1';
import Form2 from '../components/Forms/Form2';
import Form3 from '../components/Forms/Form3';
import { Container } from 'react-bootstrap';
import '../styles/Form.css';

class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      description: '',
			propType: 'elija',
			area: '',
			floors: '',			
			furniture: 'elija',
			stratum: '',
      ancient: 'elija',
      city: 'elija',
      neighbor: '',
			integralKitchen: 'elija',
			rooms: '',			
			roomsWithBath: '',
			roomsWBAD: '',
			livings: '',
			socialBaths: '',
			socialWshowers: '',
			luxury: '',
			parkings: '',
      sharedZones: '',
      stables: 'elija',
			pool: 'elija',
			jacuzzi: 'elija',
			turkish: 'elija',			
			sauna: 'elija',
			study: 'elija',
			cinema: 'elija',
			playroom: 'elija',
			fireplaces: 'elija',
			gasFireplaces: 'elija',
			decks: 'elija',
			waterMirrors: 'elija',
			waterfalls: 'elija',
			kiosk: 'elija',
			price: '',
			comission: 'elija'
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
   
  handleSubmit = async event => {
    event.preventDefault()
    try {
      let response = await fetch(`http://localhost:3000/property`, {
        method: "POST",
        body: JSON.stringify(this.state),
        headers:{
          'Content-Type': 'application/json'
        }
      });
      let data = await response.json();
      console.log(data);     
    } catch (err) {
      console.log(err);
    }
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2 ? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Anterior
        </button>
      )
    }
    return null;
  }

  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Siguiente
        </button>        
      )
    }
    return null;
  }
  
  render() {    
    return (
      <Container>
        <h2 className='text-center'>Registrar una propiedad</h2>
        <h4 className='text-center'>Paso {this.state.currentStep}</h4> 
        <form className='form' onSubmit={this.handleSubmit}>
          <Form1
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            description={this.state.description}
            propType={this.state.propType}
            area={this.state.area}
            floors={this.state.floors}			
            furniture={this.state.furniture}
            stratum={this.state.stratum}
            ancient={this.state.ancient}
          />
          <Form2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            city={this.state.city}
            neighbor={this.state.neighbor}
            integralKitchen={this.state.integralKitchen}
            rooms={this.state.rooms}			
            roomsWithBath={this.state.roomsWithBath}
            roomsWBAD={this.state.roomsWBAD}
            livings={this.state.livings}
            socialBaths={this.state.socialBaths}
            socialWshowers={this.state.socialWshowers}
            luxury={this.state.luxury}
          />
          <Form3 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            parkings={this.state.parkings}
            sharedZones={this.state.sharedZones}
            stables={this.state.stables}
            pool={this.state.pool}
            jacuzzi={this.state.jacuzzi}
            turkish={this.state.turkish}			
            sauna={this.state.sauna}
            study={this.state.study}
            cinema={this.state.cinema}
            playroom={this.state.playroom}
            fireplaces={this.state.fireplaces}
            gasFireplaces={this.state.gasFireplaces}
            decks={this.state.decks}
            waterMirrors={this.state.waterMirrors}
            waterfalls={this.state.waterfalls}
            kiosk={this.state.kiosk}
            price={this.state.price}
            comission={this.state.comission}
          />
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </Container>
    );
  }
}

export default MasterForm;