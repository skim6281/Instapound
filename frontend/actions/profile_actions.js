import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_SUCCESS = 'RECEIVE_USER_SUCCESS';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUserSuccess = user => ({
  type: RECEIVE_USER_SUCCESS,
  user
});

export const fetchUser = (username) => dispatch => {
  return UserAPIUtil.fetchUser(username)
    .then(user => dispatch(receiveUser(user)));
};

export const updateUser = (user) => dispatch => {
  return UserAPIUtil.updateUser(user)
    .then(user => dispatch(receiveUserSuccess(user)));
};
