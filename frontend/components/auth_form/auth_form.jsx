import React from 'react';
import { Link, withRouter } from 'react-router';

class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: ""};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps(newProps) {
    if (newProps.formType !== this.props.formType) {
      this.props.removeErrors();
    }
  }

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		if (this.props.formType === 'Log in') {
			this.props.login(user);
		} else if (this.props.formType === 'Sign up'){
			this.props.signup(user);
		}
	}

	renderErrors() {
		return(
			<ul className="error-list">
				{this.props.errors.map((error, ind) => (
					<li key={ind}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	changeForm(formChangeText) {
		return e => {
			this.props.receiveFormType(formChangeText);
		}
	}

	render() {
		const {formType} = this.props;
		let formChangeText;
		let text;
		if (formType === 'Log in'){
			formChangeText = 'Sign up';
			text = "Don't have an account?";
		} else if (formType === 'Sign up'){
			formChangeText = 'Log in';
			text = "Have an account?";
		}

		return (
			<div className="auth-form-container">
				<logo>
					Instapound
				</logo>
				<form onSubmit={this.handleSubmit} className="auth-form-box">
					<br/>
					<div className="auth-form">
						<br/>
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="auth-input" />
						</label>
						<br/>
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="auth-input" />
						</label>
						<br/>
						<input type="submit" value={formType} />
						<div>{this.renderErrors()}</div>
					</div>
				</form>
				<div className="change-auth-form">
					<p>{text}</p>
					<button onClick={this.changeForm(formChangeText)}>{formChangeText}</button>
				</div>
			</div>
		);
	}
}

export default withRouter(AuthForm);
