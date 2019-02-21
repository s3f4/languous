import React, { Component } from 'react';
import './App.css';
import Header from '../layouts/Header';
import Body from '../layouts/Body';
import Footer from '../layouts/Footer';

import { BrowserRouter as Router } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Body />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
