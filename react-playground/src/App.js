import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Button variant="contained" color="primary">
            Hello World
          </Button>
      </div>
    );
  }
}

export default App;
