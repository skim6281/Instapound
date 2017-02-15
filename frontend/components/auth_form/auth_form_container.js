import { connect } from 'react-redux';
import { login, signup, removeErrors, receiveFormType } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = (state, ownProps) => {
  return ({
    loggedIn: state.session.currentUser,
    errors: state.session.errors,
    formType: state.session.formType
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeErrors: () => dispatch(removeErrors()),
    receiveFormType: formType => dispatch(receiveFormType(formType)),
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
