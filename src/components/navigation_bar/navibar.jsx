import React, { useState } from 'react'
import { Link } from 'react-scroll';
import './navibar.css'
import { BsList } from 'react-icons/bs'
import Toggle from './toggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navibar() {
  
  return (
    <div >
      <Navbar className='color-nav' fixed="top" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand >Sasith Duleepa</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="responsive-navbar-nav">
          

          <Nav className='navs'>
          <Link
            to="Home"
            smooth={true}
            duration={500}
          >
            <a className='a'>Home</a>
          </Link>           
        
          <Link
            to="about-section"
            smooth={true}
            duration={500}
          >
            <a className='a'>About</a>
          </Link>           
          
          <Link
            to="Blog"
            smooth={true}
            duration={500}
          >
            <a className='a'>Blog</a>
          </Link>           
         
          <Link
            to="Contact-me"
            smooth={true}
            duration={500}
          >
            <a className='a'>Contact</a>
          </Link>           
          </Nav>

        </Navbar.Collapse>
       
      </Container>
    </Navbar>
    </div>
  )
}

export default Navibar