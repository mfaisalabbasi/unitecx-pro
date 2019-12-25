import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      props.auth ? <Component {...props} /> : <Redirect to='/admin/loging' />
    }
  />
);

export default PrivateRoute;
