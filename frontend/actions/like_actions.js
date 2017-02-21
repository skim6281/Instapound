import * as ImageAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

export const createLike = (imageId) => dispatch => {
  return ImageAPIUtil.createLike(imageId)
    .then(like => dispatch(receiveLike(like)));
};

export const deleteLike = (imageId) => dispatch => {
  return ImageAPIUtil.deleteLike(imageId)
    .then(like => dispatch(removeLike(like)));
};
