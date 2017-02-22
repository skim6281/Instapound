import { RECEIVE_IMAGES } from '../actions/image_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';
import { getIndex } from '../util/util';
import merge from 'lodash/merge';

const initialState = {
  images: []
};

const PhotoFeedReducer = (state = initialState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_IMAGES:
      return Object.assign({}, state, {images: action.images});
    case RECEIVE_LIKE:
      let newRecLikeImages = state.images.slice();
      let i = getIndex(newRecLikeImages, action.like.imageId);
      newRecLikeImages[i].likes.push(action.like.userId);
      return Object.assign({}, state, {images: newRecLikeImages});
    case REMOVE_LIKE:
      let newRemLikeImages = state.images.slice();
      let ind = getIndex(newRemLikeImages, action.like.imageId);
      let likeIndex = newRemLikeImages[ind].likes.indexOf(action.like.userId);
      newRemLikeImages[ind].likes.splice(likeIndex, 1);
      return Object.assign({}, state, {images: newRemLikeImages});
    case RECEIVE_COMMENT:
      let newRecCommentImages = state.images.slice();
      let j = getIndex(newRecCommentImages, action.comment.imageId);
      newRecCommentImages[j].comments.push(action.comment);
      return Object.assign({}, state, {images: newRecCommentImages});
    default:
      return state;
  };
};

export default PhotoFeedReducer;
