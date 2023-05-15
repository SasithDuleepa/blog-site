import logo from './logo.svg';
import Navibar from './components/navigation_bar/navibar';
import Footer from './components/footer/footer';
import './App.css';
import { Link } from 'react-scroll';

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './landin';
import Blog from './blog-page/blog';

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
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
function App() {
  return (
    <div className="App">
      
     
      
     

      

      
   


    <Router>
      <Switch>
        <Route path="/" exact><Landing/></Route>
        <Route path="/blog/:title" exact><Blog/></Route>
      </Switch>
    </Router>





  
    </div>
  );
}

export default App;
