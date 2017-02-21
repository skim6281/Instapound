import React from 'react';
import { hashHistory, Link } from 'react-router';
import { userIncluded } from '../../util/util';

class FollowingModal extends React.Component {
  constructor(props) {
    super(props);
  }

  renderFollowButton(user) {
    if (userIncluded(this.prop.currentUser.followings, user.id)) {
      return (
        <button className="follow-button">
          Following
        </button>
      );
    } else {
      return (
        <button className="follow-button follow">
          Follow
        </button>
      )
    }
  }

  renderUsers(users) {
    return users.map(user => {
      return(
        <li key={user.id} className="follow-row">
          <div className="follow-modal-user-details">
            <img className="post-author-profile-pic" src={user.profile_pic_url}/>
            <div className="follow-name">
              <a>{user.username}</a>
            </div>
          </div>
          <button className="follow-button">
            Following
          </button>
        </li>
      );
    });
  }

  render() {
    const { users, currentUser, closeModal, type } = this.props;
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
