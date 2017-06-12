import React from 'react';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.currentUser.name,
      bio: this.props.currentUser.bio
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.username);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.updateUser(user);
  }

  render() {
    const { currentUser, success } = this.props;
    return (
      <main className="edit-profile-container grey-border">
        <div className="edit-user-header">
          <aside className="edit-label">
            <img className="edit-profile-pic grey-border" src={currentUser.profile_pic_url}/>
          </aside>
          <h1>{currentUser.username}</h1>
        </div>
        <form className="edit-user-form" onSubmit={this.handleSubmit}>
          <div className="edit-row">
            <aside className="edit-label">
              <label for="editName">Name</label></aside>
            <input type="text"
              value={this.state.name}
              onChange={this.update('name')}
              className="lb-input"
              id="editName"
            />
          </div>
          <div className="edit-row">
            <aside className="edit-label">
              <label for="editBio">Bio</label></aside>
            <textarea
              value={this.state.bio}
              onChange={this.update('bio')}
              className="lb-input"
              id="editBio"
            />
          </div>
          <div className="edit-row">
            <aside className="edit-label">
              <label>&nbsp;</label>
            </aside>
            <button className="submit-form edit-submit">Submit</button>
          </div>
          <p className="edit-success">
            {success}
          </p>
        </form>
      </main>
    )
  }
}

export default EditProfile;
