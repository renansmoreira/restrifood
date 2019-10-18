import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/sobre">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
    </div>
  );
}

export default App;
