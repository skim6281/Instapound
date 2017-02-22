import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';
export const RECEIVE_FORM_TYPE = 'RECEIVE_FORM_TYPE';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS,
});

export const receiveFormType = formType => ({
  type: RECEIVE_FORM_TYPE,
  formType
});

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user)
  .then(user => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveErrors(err.responseJSON)));
};

export const login = user => dispatch => {
  return SessionAPIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)));
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then(user => dispatch(receiveCurrentUser(null)));
};
