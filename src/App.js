import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Create from './Components/Create';
import Get from './Components/Get';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavComponent from './NavComponent';
import Update from './Components/Update';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
      <NavComponent/>
        <h1>ToDo's..!</h1>
        <hr/>
        <Switch>
          <Route exact path='/create' component={Create}/>
          <Route exact path='/Get' component={Get}/> 
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/update' component={Update}/> 
        </Switch>

      </div>
      </Router>
    );
  }
}

export default App;
