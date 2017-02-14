import React from 'react';
import { Link } from 'react-router';
import AuthFormContainer from './auth_form/auth_form_container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {formType: 'login'};
  }

  componentWillReceiveProps(newProps) {
    this.setState({formType: newProps.formType})
  }

  render(){
    if (this.state.formType === 'login' || this.state.formType === 'signup'){
      return (
        <div>
          <AuthFormContainer formType={this.state.formType}/>
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
