import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/sobre">
          <h2>Restrifood</h2>
        </Link>
      </header>
    </div>
  );
}

export default App;
