import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import AuthFormContainer from './auth_form/auth_form_container';
import PhotoFeedContainer from './photo_feed/photo_feed_container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {formType: 'Log in'};
  }

  render(){
    if (this.props.currentUser){
      return (
        <div>
          
          <PhotoFeedContainer/>
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
