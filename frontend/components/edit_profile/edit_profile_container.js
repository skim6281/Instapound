import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/profile_actions';
import EditProfile from './edit_profile';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchUser: (username) => dispatch(fetchUser(username)),
    updateUser: (user) => dispatch(updateUser(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile)
