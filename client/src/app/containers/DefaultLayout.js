import { Route } from 'react-router';
import * as React from 'react';

export const DefaultLayout = ({ component: Component, ...routeProps }) => {
  return (
    <Route
      {...routeProps}
      render={(matchProps) => (
        <div className="default-layout">
          <Component {...matchProps} />
        </div>
      )}
    />
  );
};
