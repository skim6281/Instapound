import { connect } from 'react-redux';
import { fetchCurrentUser, updateUser } from '../../actions/profile_actions';
import EditProfile from './edit_profile';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.profile.currentUser,
    success: state.profile.success
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchCurrentUser: (username) => dispatch(fetchCurrentUser(username)),
    updateUser: (user) => dispatch(updateUser(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
