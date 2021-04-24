import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/login';
import Theatre from './pages/theatre';
import Main from './pages/main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/theatre">
          <Theatre />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
