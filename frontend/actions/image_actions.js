import * as ImageAPIUtil from '../util/image_api_util';
import { receiveUser } from './profile_actions';

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';
export const RECEIVE_USER_IMAGES = 'RECEIVE_USER_IMAGES';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const RECEIVE_PROFILE_IMAGE = 'RECEIVE_PROFILE_IMAGE';

export const receiveImages = images => ({
  type: RECEIVE_IMAGES,
  images
});

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

export const receiveProfileImage = image => ({
  type: RECEIVE_PROFILE_IMAGE,
  image
});

export const fetchImages = () => dispatch => {
  return ImageAPIUtil.fetchImages()
    .then(images => dispatch(receiveImages(images)));
};


export const fetchUserImages = (username) => dispatch => {
  return ImageAPIUtil.fetchUserImages(username)
    .then(images => dispatch(receiveUserImages(images)));
};

export const createImage = (image) => dispatch => {
  return ImageAPIUtil.createImage(image)
    .then(image => dispatch(receiveImage(image)));
}

export const updateUserProfilePic = (username, image) => dispatch => {
  return ImageAPIUtil.updateUserProfilePic(username, image)
    .then(user => dispatch(receiveUser(user)));
};
