import React from 'react';
import { Route } from 'react-router-dom';
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

const App = () => {
  return (
  <>
  <Navbar />
  <Route path="/home">
  <Home />
  </Route>

  <Route path="/login">
  <Login />
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
  </>
  )
}

export default App;
