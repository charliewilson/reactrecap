import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import PhotoList from "./components/PhotoList"
import PhotoPage from "./components/PhotoPage"

function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/photos" component={PhotoList} />
        <Route exact path="/photos/:photoid" component={PhotoPage} />
        <Route render={() => (
          <p>Not found</p>
        )} />
      </Switch>
    </Router>
  );
}

export default App;
