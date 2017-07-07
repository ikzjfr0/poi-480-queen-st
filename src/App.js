import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleMap from './map';

class App extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '800px' }}>
        <SimpleMap />
      </div>
    );
  }
}

export default App;
