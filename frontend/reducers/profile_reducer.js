import { RECEIVE_USER, RECEIVE_USER_IMAGES, RECEIVE_IMAGE } from '../actions/profile_actions';
import { RECEIVE_FOLLOWER, REMOVE_FOLLOWER } from '../actions/following_actions';
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
      let newImages = state.images.slice();
      newImages.unshift(action.image);
      return Object.assign({}, state, {images: newImages});
    case RECEIVE_FOLLOWER:
      let newFollowers = state.user.followers.slice();
      newFollowers.push(action.follower);
      let newUser = Object.assign({}, state.user, {followers: newFollowers});
      return Object.assign({}, state, {user: newUser});
    case REMOVE_FOLLOWER:
      let newRemoveFollowers = state.user.followers.slice();
      let i;
      newRemoveFollowers.forEach((follower,index)  => {
        if (follower.id === action.follower.id) {
          i = index;
          return;
        }
      });
      newRemoveFollowers.splice(i, 1);
      let newRemoveUser = Object.assign({}, state.user, {followers: newRemoveFollowers})
      return Object.assign({}, state, {user: newRemoveUser});
    default:
      return state;
  }
}

export default ProfileReducer;
