import React, { useState } from 'react';
import './app.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
// trying to keep all functionality centeral in app.js
// no use of context or api used for port site. prop driller
const App = ()=> {
  const [isOpen,setIsOpen] = useState(false);
     const toggle = () =>{
       setIsOpen(!isOpen)
      }
  return (
    <Router>
      <Switch>
    <Route exact path="/"  
    render={props => 
      (<HomePage {...props} isOpen={isOpen} toggle={toggle} />)
    }/>
    <Route exact path="/contact" component={ContactPage} />
    </Switch>
    </Router>
  );
}

export default App;
