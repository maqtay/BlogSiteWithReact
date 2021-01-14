import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/Navbar";
import React from 'react';
import Home from './components/pages/Home';

import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home }/>
          <Route path="/services" component={Services }/>
          <Route path="/products" component={Products }/>
          <Route path="/signup" component={SignUp }/>

        </Switch>
      </Router>

    </>
  );
}

export default App;
