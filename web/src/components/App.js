import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ErrorPage from '../pages/ErrorPage';
import Words from '../pages/Words';
import Profile from '../pages/Profile';
import WordForm from './forms/WordForm';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Words} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/words" component={Words} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/words/new" component={WordForm} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
