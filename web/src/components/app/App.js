import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';
import ErrorPage from '../../pages/ErrorPage';
import MainPage from '../../pages/MainPage';
import { store } from "../../index"

class App extends Component {
  componentWillUpdate = () => {
    console.log(store.getState());
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/profile" component={RegisterForm} />
          <Route exact path="/my-words" component={LoginForm} />
          <Route exact path="/words" component={RegisterForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
