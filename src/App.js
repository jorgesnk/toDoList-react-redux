import React, { Component } from 'react';
import AppRouter from "./router/router"
import './App.css';
import Header from "./components/header/header.compent";
class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <AppRouter></AppRouter>
      </div>


    );
  }
}

export default App;
