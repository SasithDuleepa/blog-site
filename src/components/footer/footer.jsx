import React from 'react'
import './footer.css'
import { Link } from 'react-scroll';
function Footer() {
  return (
    <div className='footer'>
        <div className='set1'>
            <p>Sasith Duleepa</p>
            <p>Copyright © 2023 All rights reserved</p>

        </div>
        <div className='set2'>
        
          <Link
            to="Home"
            smooth={true}
            duration={500}
          >
            <a className='aa'>Home</a>
          </Link>    
          <Link
            to="about-section"
            smooth={true}
            duration={500}
          >
            <a className='aa'>About</a>
          </Link>       
          <Link
            to="Blog"
            smooth={true}
            duration={500}
          >
            <a className='aa'>Blog</a>
          </Link>         
          <Link
            to="Contact-me"
            smooth={true}
            duration={500}
          >
            <a className='aa'>Contact</a>
          </Link>           
          
        </div>
        
    </div>
  )
}

export default Footer