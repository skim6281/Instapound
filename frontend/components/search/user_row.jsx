import React from 'react';
import { hashHistory } from 'react-router';

class UserRow extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToUser = this.redirectToUser.bind(this);
  }

  redirectToUser() {
    this.props.clearQuery();
    hashHistory.push(`${this.props.username}`);
  }

  render() {
    const { username, profilePicUrl, name, id } = this.props;
    return (
      <li key={id} className="user-row" onClick={this.redirectToUser}>
        <img className="post-author-profile-pic" src={profilePicUrl} />
        <span className="author-name text">{username}</span>
      </li>
    )
  }
}

export default UserRow;
