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

  renderImages() {
    return this.props.images.map(image => {
      return <Image key={image.id} image={image}/>
    });
  }

  render() {
    if (this.props.user) {
      return (
        <div className="profile-container">
          <article>
            <header>
              <div>

              </div>
            </header>
            <section className="profile-image-section">
              {this.renderImages()}
            </section>
          </article>
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
