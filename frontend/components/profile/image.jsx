import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { image } = this.props;
    return (
      <div className="profile-image">
        <img src={image.photo_url}/>
      </div>
    );
  }
}

export default Image;
