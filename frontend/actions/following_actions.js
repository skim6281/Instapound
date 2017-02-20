import * as FollowingAPIUtil from '../util/following_api_util';

export const RECEIVE_FOLLOWING = 'RECEIVE_FOLLOWING';
export const REMOVE_FOLLOWING = 'REMOVE_FOLLOWING';

export const receiveFollowing = following => {
  return {
    type: RECEIVE_FOLLOWING,
    following
  };
};

export const removeFollowing = following => {
  return {
    type: REMOVE_FOLLOWING,
    following
  };
};

export const createFollowing = (followeeId) => {
  return FollowingAPIUtil.createFollowing(followeeId)
    .then(following => dispatch(receiveFollowing(following)));
};

export const deleteFollowing = (followeeId) => {
  return FollowingAPIUtil.deleteFollowing(followeeId)
    .then(following => dispatch(removeFollowing(following)));
};
