import React from 'react';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser.username,
      name: this.props.currentUser.name,
      bio: this.props.currentUser.bio,
      email: this.props.currentUser.email
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
    const user = this.state;

  }

  render() {
    const { currentUser } = this.props;
    return (
      <main className="edit-profile-container">
        <div>
          <div>{currentUser.profile_pic_url}</div>
          <h1>{currentUser.username}</h1>
        </div>
        <form>
          <div>
            <aside>Name</aside>
            <input type="text"
              placeholder={`${currentUser.name}`}/>
          </div>
        </form>
      </main>
    )
  }
}
