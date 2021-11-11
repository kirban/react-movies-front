import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { NotFound } from '@components';

ReactDOM.render((
    <Router>
    {
      <Switch>
        <Route path="/search">
            <App />
        </Route>
        <Route exact path="/" render={({ location }) => <Redirect to={{ pathname: '/search', state: { from: location } }} />} />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    }
    </Router>
), document.getElementById('app'));
