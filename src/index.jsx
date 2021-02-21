import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';

import { GlobalStyle } from 'globalStyled';
import theme from 'theme';
import Onboarding from 'pages/Onboarding';
import Dashboard from 'pages/Dashboard';
import { ONBOARDING_PATH, DASHBOARD_PATH } from 'constans/paths';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route component={Onboarding} exact path={ONBOARDING_PATH} />
            <Route component={Dashboard} path={DASHBOARD_PATH} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
