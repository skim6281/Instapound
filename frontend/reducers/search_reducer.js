import {RECEIVE_USERS} from '../actions/user_actions';

const initialState = {
  users: []
}

const SearchReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return Object.assign({}, state, {users: action.users})
    default:
      return state;
  }
};

export default SearchReducer;
