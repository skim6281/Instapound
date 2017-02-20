import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  return ({
    currentUser: state.session.currentUser
  });
}

export default connect(
  mapStateToProps
)(NavBar)
