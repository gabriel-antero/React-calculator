import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import GlobalStyles from '../styles/global';

const Routes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>

      <GlobalStyles />
    </>
  );
};

export default Routes;
