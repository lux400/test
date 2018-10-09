import Gallery from 'app/routes/gallery/index';
import NotFound from 'app/routes/404/index';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Redirect, Switch } from 'react-router';
import { DefaultLayout } from 'app/containers/DefaultLayout';
import { DefaultRoutes } from 'app/routes/index';

export const App = hot(module)(() => (
  <Switch>
    {DefaultRoutes.map(({ path, exact, component, wrapper: Wrapper }) => (
      <Wrapper key={path} exact={exact} component={component} path={path} />
    ))}
    <DefaultLayout exact={true} path="/gallery" component={Gallery} />
    <DefaultLayout path="/404" component={NotFound} />
    <Redirect from="/" to="/gallery" />
  </Switch>
));
