import { RECEIVE_IMAGES } from '../actions/image_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { getIndex } from '../util/util';

const initialState = {
  images: []
};

const PhotoFeedReducer = (state = initialState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_IMAGES:
      const newImages = [...state.images, ...action.images];
      return Object.assign({}, state, {images: newImages});
    case RECEIVE_LIKE:
      const newRecLikeImages = state.images.slice();
      const i = getIndex(newRecLikeImages, action.like.imageId);
      newRecLikeImages[i].likes.push(action.like.userId);
      return Object.assign({}, state, {images: newRecLikeImages});
    case REMOVE_LIKE:
      const newRemLikeImages = state.images.slice();
      const ind = getIndex(newRemLikeImages, action.like.imageId);
      const likeIndex = newRemLikeImages[ind].likes.indexOf(action.like.userId);
      newRemLikeImages[ind].likes.splice(likeIndex, 1);
      return Object.assign({}, state, {images: newRemLikeImages});
    case RECEIVE_COMMENT:
      const newRecCommentImages = state.images.slice();
      const j = getIndex(newRecCommentImages, action.comment.imageId);
      newRecCommentImages[j].comments.push(action.comment);
      return Object.assign({}, state, {images: newRecCommentImages});
    case REMOVE_COMMENT:
      const newRemCommentImages = state.images.slice();
      const remComImageInd = getIndex(newRemCommentImages, action.comment.imageId);
      const commentIndex = getIndex(newRemCommentImages[remComImageInd].comments, action.comment.id);
      newRemCommentImages[remComImageInd].comments.splice(commentIndex, 1);
      return Object.assign({}, state, {images: newRemCommentImages });
    default:
      return state;
  };
};

export default PhotoFeedReducer;
