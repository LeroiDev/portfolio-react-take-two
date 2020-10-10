import React from 'react';
import './app.css';
import {BrowserRouter as RouterR} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';

const App = ()=> {
  return (
    <RouterR>
    <div className="app">
      <Navbar/>
    </div>
    </RouterR>
  );
}

export default App;
