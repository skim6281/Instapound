import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  REMOVE_ERRORS,
  RECEIVE_FORM_TYPE} from '../actions/session_actions';
import merge from 'lodash/merge';

const initialState = {
  currentUser: null,
  errors: [],
  formType: 'Log in'
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.currentUser, errors: [], formType: null});
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { errors: action.errors});
    case REMOVE_ERRORS:
      return Object.assign({}, state, { errors: [] });
    case RECEIVE_FORM_TYPE:
      return Object.assign({}, state, { formType: action.formType})
    default:
      return state;
  }
};

export default SessionReducer;
