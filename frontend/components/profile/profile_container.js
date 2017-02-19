import { connect } from 'react-redux';
import Profile from './profile';
import { logout } from '../../actions/session_actions';
import { fetchUser, fetchUserImages } from '../../actions/profile_actions';
import { selectAllImages } from '../../reducers/selectors';

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
    logout: () => dispatch(logout())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
