import * as ImageAPIUtil from '../util/image_api_util';
import { receiveUser } from './profile_actions';

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';
export const RECEIVE_USER_IMAGES = 'RECEIVE_USER_IMAGES';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const LOAD_IMAGE = 'LOAD_IMAGE';
export const LOAD_IMAGES = 'LOAD_IMAGES';

export const receiveImages = images => {
  return {
    type: RECEIVE_IMAGES,
    images

  }
};

export const receiveUserImages = images => ({
  type: RECEIVE_USER_IMAGES,
  images
});

export const receiveImage = image => {
  return{
    type: RECEIVE_IMAGE,
    image
  }
};

export const loadImage = () => {
  return{
    type: LOAD_IMAGE
  }
};

export const loadImages = () => {
  return {
    type: LOAD_IMAGES
  }
}

export const fetchImages = (limit, offset) => dispatch => {
  dispatch(loadImages());
  return ImageAPIUtil.fetchImages(limit, offset)
    .then(images => dispatch(receiveImages(images)));
};

export const fetchUserImages = (username) => dispatch => {
  dispatch(loadImage());
  return ImageAPIUtil.fetchUserImages(username)
    .then(images => dispatch(receiveUserImages(images)));
};

export const createImage = (image) => dispatch => {
  dispatch(loadImage());
  return ImageAPIUtil.createImage(image)
    .then(image => dispatch(receiveImage(image)));
}

export const updateUserProfilePic = (username, image) => dispatch => {
  return ImageAPIUtil.updateUserProfilePic(username, image)
    .then(user => dispatch(receiveUser(user)));
};
