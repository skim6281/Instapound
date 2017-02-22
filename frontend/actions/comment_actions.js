import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_IMAGE_COMMENT = 'RECEIVE_IMAGE_COMMENT';
export const REMOVE_IMAGE_COMMENT = 'REMOVE_IMAGE_COMMENT';

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const receiveImageComment = comment => ({
  type: RECEIVE_IMAGE_COMMENT,
  comment
});

export const removeImageComment = comment => ({
  type: REMOVE_IMAGE_COMMENT,
  comment
});

export const createComment = (comment) => dispatch => {
  return CommentAPIUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)));
};

export const deleteComment = (commentId) => dispatch => {
  return CommentAPIUtil.deleteComment(commentId)
    .then(comment => dispatch(removeComment(comment)));
};

export const createImageComment = (comment) => dispatch => {
  return CommentAPIUtil.createImageComment(comment)
    .then(comment => dispatch(receiveImageComment(comment)));
};

export const deleteImageComment = (commentId) => dispatch => {
  return CommentAPIUtil.deleteImageComment(commentId)
    .then(comment => dispatch(removeImageComment(comment)));
};
