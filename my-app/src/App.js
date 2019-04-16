import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
      <Button variant="contained" color="primary">
        You Know How to Click a Button  ?
      </Button>
      </div>
    );
  }
}

export default App;
