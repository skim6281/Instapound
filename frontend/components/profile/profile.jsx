import React from 'react';
import Image from './image';

class Profile extends React.Component {
  constructor(props) {
    super(props);
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

  getEditButton() {
    if (this.props.currentUser.username === this.props.user.username) {
      return (
        <button className="profile-button">Edit Profile</button>
      );
    }else {
      return (
        <button className="profile-button">Follow/Unfollow</button>
      );
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
                  {this.getEditButton()}
                  <button>. . .</button>
                </div>
                <div className="user-info-row-2">
                  
                </div>
              </div>
            </header>
            <content className="profile-image-section">
              {this.renderImages()}
            </content>
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default Profile;
