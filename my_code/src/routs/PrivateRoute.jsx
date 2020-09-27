import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({ component: Component, store, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      'auth' in store.getState() && store.getState().auth.success === true)
        ? <Component {...props} />
        : <Redirect to="/auth" />
    }
  />
);


export default PrivateRoute;