import * as ProfileAPIUtil from '../util/profile_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';


export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = (username) => dispatch => {
  return ProfileAPIUtil.fetchUser(username)
    .then(user => dispatch(receiveUser(user)));
};

export const updateUser = (user) => dispatch => {
  return ProfileAPIUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user)));
};
