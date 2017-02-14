import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AuthFormContainer from './auth_form/auth_form_container';
import App from './App';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>

        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
