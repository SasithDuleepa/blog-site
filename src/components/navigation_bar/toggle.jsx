import React from 'react'
import { Link } from 'react-scroll';
function Toggle() {
  return (
    <div className='toggle'>
        <Link to="about-section" smooth={true} duration={500} >
                  <a>About</a>
                </Link>


    </div>
  )
}

export default Toggle