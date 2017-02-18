import { RECEIVE_USER } from '../actions/profile_actions';
import merge from 'lodash/merge';


const ProfileReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, {user: action.user})
    default:
      return state;
  }
}

export default ProfileReducer;
