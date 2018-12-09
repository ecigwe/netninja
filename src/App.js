import React, { Component } from 'react';
import {BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
         
         <h1>hello</h1>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
