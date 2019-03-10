import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';
import ErrorPage from '../../pages/ErrorPage';
import MainPage from '../../pages/MainPage';
import WordListPage from '../../pages/WordListPage';
import Profile from '../../pages/Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/my-words" component={LoginForm} />
          <Route exact path="/words" component={WordListPage} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
