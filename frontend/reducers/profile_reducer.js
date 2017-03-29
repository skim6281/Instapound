import { RECEIVE_USER, RECEIVE_USER_SUCCESS } from '../actions/profile_actions';
import { RECEIVE_USER_IMAGES, RECEIVE_IMAGE } from '../actions/image_actions';
import { RECEIVE_FOLLOWER, REMOVE_FOLLOWER } from '../actions/following_actions';
import { RECEIVE_IMAGE_LIKE, REMOVE_IMAGE_LIKE } from '../actions/like_actions';
import { RECEIVE_IMAGE_COMMENT, REMOVE_IMAGE_COMMENT } from '../actions/comment_actions';
import { getIndex } from '../util/util';
import merge from 'lodash/merge';

const initialState = {
  user: null,
  images: [],
  success: null
}

const ProfileReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, {user: action.user, success: null});
    case RECEIVE_USER_SUCCESS:
      return Object.assign({}, state, {user: action.user, success: "Profile saved!"});
    case RECEIVE_USER_IMAGES:
      return Object.assign({}, state, {images: action.images});
    case RECEIVE_IMAGE:
      const newImages = state.images.slice();
      newImages.unshift(action.image);
      return Object.assign({}, state, {images: newImages});
    case RECEIVE_FOLLOWER:
      const newFollowers = state.user.followers.slice();
      newFollowers.push(action.follower);
      const newUser = Object.assign({}, state.user, {followers: newFollowers});
      return Object.assign({}, state, {user: newUser});
    case REMOVE_FOLLOWER:
      const newRemoveFollowers = state.user.followers.slice();
      const i = getIndex(newRemoveFollowers, action.follower.id);
      newRemoveFollowers.splice(i, 1);
      const newRemoveUser = Object.assign({}, state.user, {followers: newRemoveFollowers})
      return Object.assign({}, state, {user: newRemoveUser});
    case RECEIVE_IMAGE_LIKE:
      const newImages1 = state.images.slice();
      const ind = getIndex(newImages1, action.like.imageId);
      newImages1[ind].likes.push(action.like.userId);
      return Object.assign({}, state, {images: newImages1});
    case REMOVE_IMAGE_LIKE:
      const newImages2 = state.images.slice();
      const j = getIndex(newImages2, action.like.imageId);
      const likeIndex = newImages2[j].likes.indexOf(action.like.userId);
      newImages2[j].likes.splice(likeIndex, 1);
      return Object.assign({}, state, {images: newImages2});
    case RECEIVE_IMAGE_COMMENT:
      const newRecCommentImages = state.images.slice();
      const recComImageInd = getIndex(newRecCommentImages, action.comment.imageId);
      newRecCommentImages[recComImageInd].comments.push(action.comment);
      return Object.assign({}, state, {images: newRecCommentImages});
    case REMOVE_IMAGE_COMMENT:
      const newRemCommentImages = state.images.slice();
      const remComImageInd = getIndex(newRemCommentImages, action.comment.imageId);
      const commentIndex = getIndex(newRemCommentImages[remComImageInd].comments, action.comment.id);
      newRemCommentImages[remComImageInd].comments.splice(commentIndex, 1);
      return Object.assign({}, state, {images: newRemCommentImages });
    default:
      return state;
  }
}

export default ProfileReducer;
