import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AuthFormContainer from './auth_form/auth_form_container';
import ProfileContainer from './profile/profile_container';
import PhotoFeedContainer from './photo_feed/photo_feed_container';
import EditProfileContainer from './edit_profile/edit_profile_container';
import App from './App';

const Root = ({ store }) => {

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={PhotoFeedContainer}/>
          <Route path=":username" component={ProfileContainer}/>
          <Route path="/accounts/">
            <Route path="edit" component={EditProfileContainer} />
          </Route>
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
