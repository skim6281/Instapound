import * as ProfileAPIUtil from '../util/profile_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_IMAGES = 'RECEIVE_USER_IMAGES';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUserImages = images => ({
  type: RECEIVE_USER_IMAGES,
  images
});

export const receiveImage = image => ({
  type: RECEIVE_IMAGE,
  image
});

export const fetchUser = (username) => dispatch => {
  return ProfileAPIUtil.fetchUser(username)
    .then(user => dispatch(receiveUser(user)));
};

export const fetchUserImages = (username) => dispatch => {
  return ProfileAPIUtil.fetchUserImages(username)
    .then(images => dispatch(receiveUserImages(images)));
};

export const createImage = (image) => dispatch => {
  return ProfileAPIUtil.createImage(image)
    .then(image => dispatch(receiveImage(image)));
}
