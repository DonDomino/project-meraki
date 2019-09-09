import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/footer.css';

function NavBar(){  
  return(
    <div className='wrapper'>
      <div className='footer'>
        <div className='icons'>          
          <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' color='white' />
          <FontAwesomeIcon icon={['fab', 'facebook-square']} size='2x' color='white' />
          <FontAwesomeIcon icon={['fab', 'youtube']} size='2x' color='white' />
        </div>      
        <p>2019 Mandrake Devs Studio, All rights reserved &copy;</p>      
      </div>
    </div>
  )  
}

export default NavBar;