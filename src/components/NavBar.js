import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../images/logo.png';
import '../styles/Navbar.css';

function NavBar(){  
  return(
    <div className='navBar'>
      <div  className='navLogo'>        
        <img className='logo' src={logo} alt='logo meraki'/>        
        <div className='social'>          
          <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' color='white' />
          <FontAwesomeIcon icon={['fab', 'facebook-square']} size='2x' color='white' />
          <FontAwesomeIcon icon={['fab', 'youtube']} size='2x' color='white' />
        </div>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/new">Venta y consignacion de propiedades</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )  
}

export default NavBar;
