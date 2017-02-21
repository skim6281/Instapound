import * as FollowingAPIUtil from '../util/following_api_util';

export const RECEIVE_FOLLOWER = 'RECEIVE_FOLLOWER';
export const REMOVE_FOLLOWER = 'REMOVE_FOLLOWER';

export const receiveFollower = follower => {
  return {
    type: RECEIVE_FOLLOWER,
    follower
  };
};

export const removeFollower = follower => {
  return {
    type: REMOVE_FOLLOWER,
    follower
  };
};

export const createFollowing = (followeeId) => dispatch => {
  return FollowingAPIUtil.createFollowing(followeeId)
    .then(follower => dispatch(receiveFollower(follower)));
};

export const deleteFollowing = (followeeId) => dispatch => {
  return FollowingAPIUtil.deleteFollowing(followeeId)
    .then(follower => dispatch(removeFollower(follower)));
};
