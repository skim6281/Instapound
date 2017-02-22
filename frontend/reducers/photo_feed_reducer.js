import { RECEIVE_IMAGES } from '../actions/photo_feed_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
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
      let newImages = state.images.slice();
      let i = getIndex(newImages, action.like.imageId);
      newImages[i].likes.push(action.like.userId);
      return Object.assign({}, state, {images: newImages});
    case REMOVE_LIKE:
      let newImages2 = state.images.slice();
      let ind = getIndex(newImages2, action.like.imageId);
      let likeIndex = newImages2[ind].likes.indexOf(action.like.userId);
      newImages2[ind].likes.splice(likeIndex, 1);
      return Object.assign({}, state, {images: newImages2});
    default:
      return state;
  };
};

export default PhotoFeedReducer;
