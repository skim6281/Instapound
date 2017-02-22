import { connect } from 'react-redux';
import Profile from './profile';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/profile_actions';
import { fetchUserImages, createImage } from '../../actions/image_actions';
import { createFollowing, deleteFollowing } from '../../actions/following_actions';
import { selectAllImages } from '../../reducers/selectors';
import { createImageLike, deleteImageLike } from '../../actions/like_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    user: state.profile.user,
    images: selectAllImages(state.profile.images)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchUser: (username) => dispatch(fetchUser(username)),
    fetchUserImages: (username) => dispatch(fetchUserImages(username)),
    createImage: (image) => dispatch(createImage(image)),
    createFollowing: (followeeId) => dispatch(createFollowing(followeeId)),
    deleteFollowing: (followeeId) => dispatch(deleteFollowing(followeeId)),
    createImageLike: (imageId) => dispatch(createImageLike(imageId)),
    deleteImageLike: (imageId) => dispatch(deleteImageLike(imageId)),
    logout: () => dispatch(logout())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
