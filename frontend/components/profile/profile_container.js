import { connect } from 'react-redux';
import Profile from './profile';
import { logout } from '../../actions/session_actions';
import { fetchUser, fetchImage } from '../../actions/profile_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    user: state.profile.user,
    images: state.profile.images
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchUser: (username) => dispatch(fetchUser(username)),
    fetchImage: (id) => dispatch(fetchImage(id)),
    logout: () =>dispatch(logout())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
