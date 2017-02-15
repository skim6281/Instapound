import React from 'react';
import { Link } from 'react-router';
import AuthFormContainer from './auth_form/auth_form_container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {formType: 'Log in'};
  }

  render(){
    if (!window.currentUser){
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

export default App;
