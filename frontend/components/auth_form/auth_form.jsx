import React from 'react';
import { Link, withRouter } from 'react-router';

class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: ""};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, ind) => (
					<li key={ind}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		const {formType} = this.props;
		if (formType === 'login'){

		}
		return (
			<div className="auth-form-container">
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
						<input type="submit" value='Submit' />
						<div>{this.renderErrors()}</div>
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(AuthForm);
