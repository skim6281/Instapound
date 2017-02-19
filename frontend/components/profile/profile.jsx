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

  getProfilePic() {
    if (this.props.currentUser.username === this.props.user.username) {
      return (
        <button>
          <img className="profile-pic" src={this.props.user.profile_pic_url}/>
        </button>
      );
    } else {
      return (
        <img className="profile-pic" src={this.props.user.profile_pic_url} />
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
                <div>
                  <h1>{this.props.user.username}</h1>
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
