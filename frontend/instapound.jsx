import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Root from './components/root';
import configureStore from './store/store';
import { logout } from './actions/session_actions';
// import { fetchImages } from './actions/photo_feed_actions';
import { fetchImages } from './util/photo_feed_api_util';
import { fetchUser } from './util/profile_api_util';

window.logout = logout;
window.fetchImages = fetchImages;
window.fetchUser = fetchUser;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;

  const root = document.getElementById('root');
  Modal.setAppElement(document.body)
  ReactDOM.render(<Root store={store}/>, root);
});
