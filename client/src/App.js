import React, { Component } from 'react';
import Users from "./components/user/Users";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>Users</h2>
        <Users>Courtesy: Brad Traversy</Users>
      </div>
    );
  }
}

export default App;
