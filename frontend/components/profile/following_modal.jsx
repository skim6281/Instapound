import React from 'react';
import { hashHistory, Link } from 'react-router';
import { userIncluded } from '../../util/util';

class FollowingModal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFollow(user) {

  }

  handleUnfollow(user) {

  }

  renderFollowButton(user) {
    if (user.id === this.props.currentUser.id) {
      return;
    }

    if (userIncluded(this.props.currentUser.followings, user.id)) {
      return (
        <button
          className="follow-button"
        >
          Following
        </button>
      );
    } else {
      // debugger
      return (
        <button
          className="follow-button follow"
        >
          Follow
        </button>
      )
    }
  }

  // renderFollows(user) {
  //   let otherUsers;
  //   if (this.props.type === "Following") {
  //     otherUsers = user.followings;
  //   } else {
  //     otherUsers = user.followers;
  //   }
  //   debugger
  //   this.renderUsers(otherUsers);
  // }

  redirectToUser(user) {
    return e => {
      this.props.closeModal();
      hashHistory.push(`${user.username}`)
    }
  }

  renderUsers(users) {
    return users.map(user => {
      return(
        <li key={user.id} className="follow-row">
          <div className="follow-modal-user-details">
            <img className="post-author-profile-pic" src={user.profile_pic_url}/>
            <div className="follow-name">
              <a className="link" onClick={this.redirectToUser(user)}>{user.username}</a>
            </div>
          </div>
          {this.renderFollowButton(user)}
        </li>
      );
    });
  }

  render() {
    const { user, users, currentUser, closeModal, type } = this.props;
    return (
      <main className="follow-modal-main">
        <header className="follow-modal-header">
          <span>{type}</span>
        </header>
        <section className="follow-modal-section">
          <div>
            <ul className="follow-modal-list">
              {this.renderUsers(users)}
            </ul>
          </div>
        </section>
        <button className="exit" onClick={closeModal}>
          <img src={window.images.exit}/>
        </button>
      </main>
    );
  }
}

export default FollowingModal;
