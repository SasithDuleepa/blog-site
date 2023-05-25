import logo from './logo.svg';
import Navibar from './components/navigation_bar/navibar';
import Footer from './components/footer/footer';
import './App.css';
import { Link } from 'react-scroll';
import cover from './../src/components/pic/sasith.jpg'
import me from './../src/components/pic/me.png'
import Toggle from './components/navigation_bar/toggle';
import Card from './components/blog-card/card';
import {BsEnvelope} from "react-icons/bs";
import {SlSocialGithub,SlSocialFacebook,SlSocialLinkedin} from "react-icons/sl";
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import node_icon from './components/pic/node.js.jpg'
import react_icon from './components/pic/react-js.png'
import python_icon from './components/pic/Python.png'
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="about-section"
            smooth={true}
            duration={500}
          >
            <a style={{color: "red"}}>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
function Landing() {
  return (
    <div className="App">
     
      <Navibar/>
     

      

      <div className="Home">
        <div className='cover'><img className='cover-img' src={cover}/></div>
        <div class="overlay">
    <div class="text">Hi there,<br/> welcome to my blog page</div>
  </div>
      </div>

      <div>
      
      <div className="about-section">
        <div className='about-set1'><h2 className='about'>ABOUT</h2>
        <div className='line'></div>
        <p className='about-paragraph'>Hello, my name is Sasith Duleepa Jayathissa and I
         am a beginner-level full-stack developer currently studying at the Institute of 
         Technology, University of Moratuwa. My programming journey began as a front-end 
         web developer using React.js,
         and I have since expanded my skills to include Node.js as a back-end developer.
          Additionally, I have knowledge of the Python language.<br/>
          My goal for the future is to become an excellent software engineer,
           and I am committed to continuously improving my skills and knowledge in 
           the field. Through this blog, 
          I hope to share my experiences and insights with fellow developers 
          and contribute to the larger tech community. Thank you for joining me on this journey.

</p></div>
        <div >
          <img className='about-set2' src={me}/>
        </div>
        
        
      </div>
    </div>

    <div className='Blog'>
      <div className='blog'>
        <p className='blog-name'>BLOG</p>
        <div className='blog-line'></div>

        <div className='blog-bar'>
          <Card icon={node_icon} title="Node.js" content="Node.js has become a popular choice for building server-side applications due to its ability to 
            handle large volumes of data and concurrency....." link="./blog/node.js"/>
          <Card icon={react_icon} title="React.js" content="React.js is a popular JavaScript library used for building modern web applications.
             It's known for it...." link="./blog/React.js"/>
          <Card icon={python_icon} title="Python" content="Python is a versatile programming language that has been gaining popularity due to... " link="./blog/Python"/>
          
        </div>
      </div>
    </div>

    <div className='Contact-me'>
      <div className='contact'>
        <p className='contactme'>Contact Me</p>
        <div className='contact-line'></div>
        <div className='contact-frame'>
          <div className='contact-frame1'>
            {/* <p className='contact-address'>Polonnaruwa, North central Province</p> */}
            <a className='contact-email'><BsEnvelope/> duleepajayathiss@gmail.com</a>
          </div>
          
          <div className='contact-frame2'>
        <ul>
  <li>
    <a href="#">
      <i class="fab fa-facebook-f icon"></i>    </a>
  </li>
  <li>
    <a href="#"><i class="fab fa-twitter icon"></i></a>
  </li>
  <li>
    <a href="#"><i class="fab fa-linkedin-in icon"></i></a></li>
  <li>
    <a href="#"><i class="fab fa-google-plus-g icon"></i></a></li>
    <li>
    <a href="#"><i class="fab fa-github icon"></i></a></li>
</ul>
        </div>
        </div>
        

      </div>
    </div>
    <Footer/>


  




  
    </div>
  );
}

export default Landing;
