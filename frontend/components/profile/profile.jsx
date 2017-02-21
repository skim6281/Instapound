import React from 'react';
import Image from './image';
import Modal from 'react-modal';
import ImageForm from './image_form';
import FollowingModal from './following_modal';
import { userIncluded } from '../../util/util';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      uploadModalIsOpen: false,
      profilePicModalIsOpen: false,
      followersModalIsOpen: false,
      followingsModalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openUploadModal = this.openUploadModal.bind(this);
    this.closeUploadModal = this.closeUploadModal.bind(this);
    this.openProfilePicModal = this.openProfilePicModal.bind(this);
    this.closeProfilePicModal = this.closeProfilePicModal.bind(this);
    this.openFollowersModal = this.openFollowersModal.bind(this);
    this.closeFollowersModal = this.closeFollowersModal.bind(this);
    this.openFollowingsModal = this.openFollowingsModal.bind(this);
    this.closeFollowingsModal = this.closeFollowingsModal.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
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

  openProfilePicModal() {
    this.setState({profilePicModalIsOpen: true});
  }

  closeProfilePicModal() {
    this.setState({profilePicModalIsOpen: false});
  }

  openFollowersModal() {
    this.setState({followersModalIsOpen: true});
  }

  closeFollowersModal() {
    this.setState({followersModalIsOpen: false});
  }

  openFollowingsModal() {
    this.setState({followingsModalIsOpen: true});
  }

  closeFollowingsModal() {
    this.setState({followingsModalIsOpen: false});
  }

  renderProfilePic() {
    if (this.props.currentUser.username === this.props.user.username) {
      return (
        <button onClick={this.openProfilePicModal} className="profile-pic-button">
          <img className="curr-user-pic" src={this.props.user.profile_pic_url}/>
        </button>
      );
    } else {
      return (
        <img className="profile-pic" src={this.props.user.profile_pic_url} />
      )
    }
  }

  handleFollow() {
    this.props.createFollowing(this.props.user.id);
  }

  handleUnfollow() {
    this.props.deleteFollowing(this.props.user.id);
  }

  renderProfileFollowButton() {
    const user = this.props.user;
    const currentUser = this.props.currentUser;

    if (currentUser.username === user.username) {
      return (
        <button className="profile-button">Edit Profile</button>
      );
    }else {
      if (userIncluded(user.followers, currentUser.id)) {
        return (
          <button
            className="profile-button"
            onClick={this.handleUnfollow}>
            Unfollow
          </button>
        );
      }else {
        return (
          <button
            className="profile-button"
            onClick={this.handleFollow}>
            Follow
          </button>
        )
      }
    }
  }

  renderUploadButton() {
    if (this.props.currentUser.username === this.props.user.username) {
      return (
        <button onClick={this.openUploadModal} className="upload-button">
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
                {this.renderProfilePic()}
              </div>
              <div className="user-info">
                <div className="user-info-row-1">
                  <h1>{this.props.user.username}</h1>
                  {this.renderProfileFollowButton()}
                  <Modal
                    isOpen={this.state.profilePicModalIsOpen}
                    onRequestClose={this.closeProfilePicModal}
                    className="profile-pic-modal"
                    overlayClassName="overlay"
                    contentLabel="profilepic">
                    <ul>
                      <li>
                        <span className="no-click">Change Profile Picture</span>
                      </li>
                      <li>
                        <button className="button-modal">Upload Photo</button>
                      </li>
                      <li>
                        <button className="button-modal" onClick={this.closeProfilePicModal}>Cancel</button>
                      </li>
                    </ul>
                    <button className="exit" onClick={this.closeProfilePicModal}>
                      <img src={window.images.exit}/>
                    </button>
                  </Modal>
                  {this.renderUploadButton()}
                  <Modal
                    isOpen={this.state.uploadModalIsOpen}
                    onRequestClose={this.closeUploadModal}
                    className="upload-modal"
                    overlayClassName="overlay"
                    contentLabel="upload">
                    <ImageForm
                      currentUser={this.props.currentUser}
                      closeUploadModal={this.closeUploadModal}
                      createImage={this.props.createImage} />
                  </Modal>
                  {this.renderLogoutButton()}
                  <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    className="logout-modal"
                    overlayClassName="overlay"
                    contentLabel="logout">
                    <ul>
                      <li>
                        <button className="button-modal" onClick={this.props.logout}>Log out</button>
                      </li>
                      <li>
                        <button className="button-modal" onClick={this.closeModal}>Cancel</button>
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
                    <a onClick={this.openFollowersModal}>
                      <span className="bold">
                        {this.props.user.followers.length}
                      </span>
                      <span>
                        followers
                      </span>
                    </a>
                    <Modal
                      isOpen={this.state.followersModalIsOpen}
                      onRequestClose={this.closeFollowersModal}
                      className="follow-modal"
                      overlayClassName="overlay"
                      contentLabel="follow"
                      followings={this.props.currentUser.followings}>
                      <FollowingModal
                        users={this.props.user.followers}
                        currentUser={this.props.currentUser}
                        closeModal={this.closeFollowersModal}
                        type="Follower"/>
                    </Modal>
                  </li>
                  <li>
                    <a onClick={this.openFollowingsModal}>
                      <span className="bold">
                        {this.props.user.followings.length}
                      </span>
                      <span>
                        followings
                      </span>
                    </a>
                    <Modal
                      isOpen={this.state.followingsModalIsOpen}
                      onRequestClose={this.closeFollowingsModal}
                      className="follow-modal"
                      overlayClassName="overlay"
                      contentLabel="follow">
                      <FollowingModal
                        users={this.props.user.followings}
                        currentUser={this.props.currentUser}
                        closeModal={this.closeFollowingsModal}
                        type="Following"
                        followings={this.props.currentUser.followings}/>
                    </Modal>
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
