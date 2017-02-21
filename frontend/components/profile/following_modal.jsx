import React from 'react';
import { hashHistory, Link } from 'react-router';

class FollowingModal extends React.Component {
  constructor(props) {
    super(props);
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
    const { users, currentUser, closeFollowingsModal } = this.props;
    return (
      <main className="follow-modal-main">
        <header className="follow-modal-header">
          <span>Following</span>
        </header>
        <section className="follow-modal-section">
          <ul className="follow-modal-list">
            {this.renderUsers(users)}
          </ul>
        </section>
        <button className="exit" onClick={closeFollowingsModal}>
          <img src={window.images.exit}/>
        </button>
      </main>
    );
  }
}

export default FollowingModal;
