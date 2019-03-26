import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginData } from "./actions/index"
import AppRouter from "./router/router"
import './App.css';
import Header from "./components/header/header.compent";
import { Grommet } from 'grommet';

import { bindActionCreators } from 'redux';
class App extends Component {
  constructor(props) {
    super(props)


    if (window.localStorage.getItem("user")) {
      const jsonUser = JSON.parse(window.localStorage.getItem('user'));
      this.props.LoginData(jsonUser);
    }


  }
  render() {
    const theme = {
      global: {
        colors:{
          brand: '#228BE6',
          
        },
        font: {
          family: 'Roboto',
          size: '14px',
          height: '20px',
        },

      },
    };
    return (
      <div>
        <Grommet theme={theme}>
          <Header></Header>
          <AppRouter></AppRouter>
        </Grommet>

      </div>


    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ LoginData }, dispatch);



export default connect(null, mapDispatchToProps)(App);
