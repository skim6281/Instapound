import { RECEIVE_USER, RECEIVE_IMAGE } from '../actions/profile_actions';
import merge from 'lodash/merge';

const initialState = {
  user: null,
  images: []
}

const ProfileReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, {user: action.user});
    case RECEIVE_IMAGE:
      let newState = Object.assign({}, state);
      newState.images.push(action.image);
      return newState;
    default:
      return state;
  }
}

export default ProfileReducer;
