import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Users from './routes/Users.js';
import axPageR from './routes/AxPageR.js';
import bxPageR from './routes/BxPageR.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/users" component={Users} />
      <Route path="/ax" component={axPageR} />
      <Route path="/bx/:id" component={bxPageR} />

    </Router>
  );
}

export default RouterConfig;
