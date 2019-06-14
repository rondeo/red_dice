import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from './components/App';
import Greetings from './components/Greetings';
import SignUpPage from './components/SignUp/SignUpPage';

const Routes = () => {
  return (
      <Router>
          <App>
              <Switch>
                  <Route exact path="/" component={Greetings}/>
                  <Route path="/signup" component={SignUpPage}/>
              </Switch>
          </App>
      </Router>
  )
};

export default Routes;