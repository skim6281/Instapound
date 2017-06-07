import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_IMAGE_LIKE = "RECEIVE_IMAGE_LIKE";
export const REMOVE_IMAGE_LIKE = "REMOVE_IMAGE_LIKE";

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

export const receiveImageLike = like => ({
  type: RECEIVE_IMAGE_LIKE,
  like
});

export const removeImageLike = like => ({
  type: REMOVE_IMAGE_LIKE,
  like
});

export const createLike = (imageId) => dispatch => {
  return LikeAPIUtil.createLike(imageId)
    .then(like => dispatch(receiveLike(like)));
};

export const deleteLike = (imageId) => dispatch => {
  return LikeAPIUtil.deleteLike(imageId)
    .then(like => dispatch(removeLike(like)));
};

export const createImageLike = (imageId) => dispatch => {
  return LikeAPIUtil.createLike(imageId)
    .then(like => dispatch(receiveImageLike(like)));
};

export const deleteImageLike = (imageId) => dispatch => {
  return LikeAPIUtil.deleteLike(imageId)
    .then(like => dispatch(removeImageLike(like)));
};
