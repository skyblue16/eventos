import React, { Component } from 'react';
import Login from './components/Login'
import DialogExampleModal from './components/Modal/modal.js';
import logo from './logo.svg';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Eventos from './components/Eventos';
import datos from './components/Modal/datos';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Carousel />
        <Eventos /> 
      </div>
    );
  }
}

export default App;
