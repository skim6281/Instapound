import React from 'react';
import Image from './image';
import Modal from 'react-modal';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      uploadModalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openUploadModal = this.openUploadModal.bind(this);
    this.closeUploadModal = this.closeUploadModal.bind(this);

  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.username);
    this.props.fetchUserImages(this.props.params.username);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.username !== this.props.params.username) {
      this.props.fetchUser(newProps.params.username);
      this.props.fetchUserImages(newProps.params.username);
    }
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  openUploadModal() {
    this.setState({uploadModalIsOpen: true});
  }

  closeUploadModal() {
    this.setState({uploadModalIsOpen: false});
  }

  getProfilePic() {
    if (this.props.currentUser.username === this.props.user.username) {
      return (
        <button className="profile-pic-button">
          <img className="curr-user-pic" src={this.props.user.profile_pic_url}/>
        </button>
      );
    } else {
      return (
        <img className="profile-pic" src={this.props.user.profile_pic_url} />
      )
    }
  }

  renderProfileButton() {
    const user = this.props.user;
    const currentUser = this.props.currentUser;
    if (currentUser.username === user.username) {
      return (
        <button className="profile-button">Edit Profile</button>
      );
    }else {
      if (currentUser.followings.includes(user)) {
        return (
          <button className="profile-button">Unfollow</button>
        );
      }else {
        return (
          <button className="profile-button">Follow</button>
        )
      }
    }
  }

  renderUploadButton() {
    if (this.props.currentUser.username === this.props.user.username) {
      return (
        <button className="upload-button">
          <img src={window.images.upload} />
        </button>
      )
    }
  }

  renderLogoutButton() {
    if (this.props.currentUser.username === this.props.user.username) {
      return (
        <button onClick={this.openModal} className="logout-button">
          <img src={window.images.dotdotdot}/>
        </button>
      )
    }
  }

  renderImages() {
    return this.props.images.map(image => {
      return <Image key={image.id} image={image}/>
    });
  }

  render() {
    if (this.props.user) {
      return (
        <div className="profile-container">
            <header className="user-details">
              <div>
                {this.getProfilePic()}
              </div>
              <div className="user-info">
                <div className="user-info-row-1">
                  <h1>{this.props.user.username}</h1>
                  {this.renderProfileButton()}
                  {this.renderUploadButton()}
                  {this.renderLogoutButton()}

                  <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    className="logout-modal"
                    overlayClassName="overlay"
                    contentLabel="logout">
                    <ul>
                      <li>
                        <button className="logout-button-modal" onClick={this.props.logout}>Log out</button>
                      </li>
                      <li>
                        <button className="logout-button-modal" onClick={this.closeModal}>Cancel</button>
                      </li>
                    </ul>
                    <button className="exit" onClick={this.closeModal}>
                      <img src={window.images.exit}/>
                    </button>
                  </Modal>

                </div>
                <ul className="user-info-row-2">
                  <li>
                    <span className="bold">
                      {this.props.images.length}
                    </span>
                    <span>
                      posts
                    </span>
                  </li>
                  <li>
                    <a>
                      <span className="bold">
                        {this.props.user.followers.length}
                      </span>
                      <span>
                        followers
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="bold">
                        {this.props.user.followings.length}
                      </span>
                      <span>
                        followings
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </header>
            <content className="profile-image-section">
              {this.renderImages()}
            </content>
        </div>
      );
    } else {
      return (
        <div>so slowww</div>
      )
    }
  }
}

export default Profile;
