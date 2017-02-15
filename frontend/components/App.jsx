import React from 'react';
import { Link } from 'react-router';
import AuthFormContainer from './auth_form/auth_form_container';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {formType: 'Log in'};
  }

  render(){
    if (!this.props.currentUser){
      return (
        <div>
          <AuthFormContainer/>
        </div>
      )
    } else {
      return (
        <div>
          Render MainContainer here
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return ({
    currentUser: state.session.currentUser
  });
};

export default connect(
  mapStateToProps
)(App);
