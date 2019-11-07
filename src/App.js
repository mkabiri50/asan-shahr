import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import Houses from './components/Houses/Houses'
import Login from './components/loginForm'
import NavBar from './components/NavBar/NavBarItems/NavBarItems'
import DetailHose from './components/DetailHose/DetailHose'
import './App.css';
class App extends Component {
 
  render() { 
    return (  <div  className="App">
    <NavBar />
    <Switch>
      <Route path="/login" component={Login} />
    { this.props.isAuth ? <Route path="/houses" component={Houses} />:  <Redirect to='/login' />}
      <Route path="/house/:id" exact component={DetailHose} />
      <Redirect to='/login' />
    </Switch>
  </div>);
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    data :state.auth.data,
  };
}
export default connect(mapStateToProps) (App);




