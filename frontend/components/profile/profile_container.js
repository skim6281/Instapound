import { connect } from 'react-redux';
import Profile from './profile';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/profile_actions';
import { fetchUserImages, createImage, updateUserProfilePic } from '../../actions/image_actions';
import {
  createFollowing,
  deleteFollowing,
  receiveFollowingId,
  removeFollowingId,
  receiveFollowerId,
  removeFollowerId } from '../../actions/following_actions';
import { selectAllImages } from '../../reducers/selectors';
import { createImageLike, deleteImageLike } from '../../actions/like_actions';
import { createImageComment, deleteImageComment } from '../../actions/comment_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    user: state.profile.user,
    images: selectAllImages(state.profile.images),
    followers: state.session.followers,
    followings: state.session.followings,
    loading: state.loading.imageLoading
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchUser: (username) => dispatch(fetchUser(username)),
    fetchUserImages: (username) => dispatch(fetchUserImages(username)),
    createImage: (image) => dispatch(createImage(image)),
    createFollowing: (followeeId) => dispatch(createFollowing(followeeId)),
    deleteFollowing: (followeeId) => dispatch(deleteFollowing(followeeId)),
    receiveFollowingId: (id) => dispatch(receiveFollowingId(id)),
    removeFollowingId: (id) => dispatch(removeFollowingId(id)),
    receiveFollowerId: (id) => dispatch(receiveFollowerId(id)),
    removeFollowerId: (id) => dispatch(removeFollowerId(id)),
    createImageLike: (imageId) => dispatch(createImageLike(imageId)),
    deleteImageLike: (imageId) => dispatch(deleteImageLike(imageId)),
    createImageComment: (comment) => dispatch(createImageComment(comment)),
    deleteImageComment: (commentId) => dispatch(deleteImageComment(commentId)),
    updateUserProfilePic: (username, image) => dispatch(updateUserProfilePic(username, image)),
    logout: () => dispatch(logout())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
