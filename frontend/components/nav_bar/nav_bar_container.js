import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  return ({
    currentUser: state.session.currentUser,
    profileUser: state.profile.user
  });
}

export default connect(
  mapStateToProps
)(NavBar)
