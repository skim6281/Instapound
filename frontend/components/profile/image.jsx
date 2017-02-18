import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { image, fetchImage } = this.props;
    if(image.photo_url){
      return (
        <div>
          <img src={image.photo_url}/>
        </div>
      )
    } else {
      return (
        <div>no photo_url</div>
      )
    }

  }
}

export default Image;
