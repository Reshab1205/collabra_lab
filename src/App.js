import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Signup from './components/Register';
import Contact from './components/Contact';
import EnterSamples from './components/EnterSamples';
import Samples from './components/Samples';
import Logout from './components/Logout';
import EnterHaematologyReport from './components/EnterHaematologyReport';
import EnterThyroid from './components/EnterThyroid';
import EnterGlucometry from './components/EnterGlucometry';
import StoredHaeReport from './components/StoredHaeReport';
import ErrorPage from './components/ErrorPage';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import UserLoginDashboard from './components/UserLoginDashbaord';

const App = () => {
  return (
  <>
  <Navbar />
  <Switch>

  <Route path="/home">
  <Home />
  </Route>

  <Route path="/signin">
  <Login />
  </Route>

  <Route path="/admin-login">
    <AdminLogin />
  </Route>

  <Route path="/user-login">
    <UserLogin />
  </Route>
  <Route path="/dashboard">
    <UserLoginDashboard />
  </Route>
  <Route path="/register">
  <Signup />
  </Route>

  <Route path="/contact-us">
  <Contact />
  </Route>

  <Route path="/enter-samples">
  <EnterSamples />
  </Route>

  <Route path="/samples">
  <Samples />
  </Route>

  <Route path="/home">
  <Logout />
  </Route>

  <Route path="/enter-haematology-report">
  <EnterHaematologyReport />
  </Route>

  <Route path="/enter-thyroid-report">
  <EnterThyroid />
  </Route>
  <Route path="/enter-glucometry-report">
  <EnterGlucometry />
  </Route>

  <Route path="/stored-hae-report">
    <StoredHaeReport />
  </Route>
  <Route>
    <ErrorPage />
  </Route>
  </Switch>
  </>
  )
}

export default App;
