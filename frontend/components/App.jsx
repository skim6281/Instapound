import React from 'react';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import AuthFormContainer from './auth_form/auth_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {formType: 'Log in'};
  }

  redirectToHome(){
    hashHistory.push('/');
  }

  render(){
    if (this.props.currentUser){
      return (
        <div>
          <div>
            <NavBarContainer/>
          </div>
          <div>
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <AuthFormContainer/>
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
