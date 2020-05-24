import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import GlobalStyles from '../styles/global';

const Routes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>

      <GlobalStyles />
    </>
  );
};

export default Routes;
