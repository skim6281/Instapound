import {RECEIVE_USERS, REMOVE_USERS} from '../actions/user_actions';

const initialState = {
  users: []
}

const SearchReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return Object.assign({}, state, {users: action.users})
    case REMOVE_USERS:
      return initialState;
    default:
      return state;
  }
};

export default SearchReducer;
