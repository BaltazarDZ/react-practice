import React from 'react';
import { Route, Switch } from "react-router-dom";
import DifferentView from './views/DifferentView';
import Home from './views/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={DifferentView} />
    </Switch>
  );
}

export default App;
