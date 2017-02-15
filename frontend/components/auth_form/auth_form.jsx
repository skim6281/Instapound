import React from 'react';

class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: ""};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleGuestLogin = this.handleGuestLogin.bind(this);
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

	handleGuestLogin(e) {
		e.preventDefault();
		const guest = {username:"guest", password:"go_guest_go"};
		this.props.login(guest);
	}

	renderErrors() {
		return(
			<p className="error-list">
				{this.props.errors[0]}
			</p>
		);
	}

	changeForm(formChangeText) {
		return e => {
			this.props.receiveFormType(formChangeText);
		}
	}

	renderSignUpMessage() {
		if (this.props.formType === "Sign up") {
			return (
				<h2 className='sign-up-message'>Sign up to see photos and videos
					 from your friends</h2>
			)
		}
	}

	render() {
		const {formType} = this.props;
		let formChangeText;
		let text;
		if (formType === 'Log in'){
			formChangeText = 'Sign up';
			text = "Don't have an account? ";
		} else if (formType === 'Sign up'){
			formChangeText = 'Log in';
			text = "Have an account? ";
		}

		return (
			<article>
				<div className="phone-image">
					<img src={window.images.mobileImage} />
				</div>
				<div className="auth-form-container">
					<div className="auth-form-box">
						<logo>
							<img src={window.images.logoText}/>
						</logo>
						<div>{this.renderSignUpMessage()}</div>
						<form onSubmit={this.handleSubmit} className="auth-form">
							<input type="text"
								placeholder="Username"
								value={this.state.username}
								onChange={this.update("username")}
								className="auth-input" />
								<input type="password"
									placeholder="Password"
									value={this.state.password}
									onChange={this.update("password")}
									className="auth-input" />
							<input
								className="submit-form"
								type="submit"
								value={formType} />
							<div>{this.renderErrors()}</div>
							<div className="line-or-line">
								<div className="line"></div>
								<div className="or">or</div>
								<div className="line"></div>
							</div>
							<button
								className="submit-form"
								onClick={this.handleGuestLogin}>Log in as guest</button>
						</form>
					</div>
					<div className="change-auth-form">
						<p>{text}</p>
						<button onClick={this.changeForm(formChangeText)}>{formChangeText}</button>
					</div>
				</div>
			</article>

		);
	}
}

export default AuthForm;
