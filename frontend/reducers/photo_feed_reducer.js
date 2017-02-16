import { RECEIVE_IMAGES } from '../actions/photo_feed_actions';
import merge from 'lodash/merge';

const initialState = {
  images: []
};

const PhotoFeedReducer = (state = initialState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_IMAGES:
      return Object.assign({}, state, {images: action.images});
    default:
      return state;
  }
}

export default PhotoFeedReducer;
