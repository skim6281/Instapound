import { RECEIVE_USER, RECEIVE_USER_IMAGES, RECEIVE_IMAGE } from '../actions/profile_actions';
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
    case RECEIVE_USER_IMAGES:
      return Object.assign({}, state, {images: action.images});
    case RECEIVE_IMAGE:
      let newImages = Object.assign([], state.images);
      newImages.unshift(action.image);
      return Object.assign({}, state, {images: newImages})
    default:
      return state;
  }
}

export default ProfileReducer;
