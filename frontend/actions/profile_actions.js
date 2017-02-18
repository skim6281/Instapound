import * as ProfileAPIUtil from '../util/profile_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveImage = image => ({
  type: RECEIVE_IMAGE,
  image
})

export const fetchUser = (username) => dispatch => {
  return ProfileAPIUtil.fetchUser(username)
    .then(user => dispatch(receiveUser(user)));
}

export const fetchImage = (id) => dispatch => {
  return ProfileAPIUtil.fetchImage(id)
    .then(image => dispatch(receiveImage(image)));
}
