import CreateEvent from './components/CreateEvent'
// import SearchText from './components/SearchText';
import ViewEvents from './components/ViewEvents';
import HomePage from './components/HomePage';
import Map from './components/Map';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef, useEffect, useState } from 'react'

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact>
          <CreateEvent />
        </Route>
        <Route path="/events" exact>
          <ViewEvents />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/map" exact>
          <Map />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
