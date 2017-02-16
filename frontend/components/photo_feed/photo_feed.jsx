import React from 'react';
import Post from './post';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchImages();
  }

  renderPosts() {
    return this.props.images.map(image => {
      return <Post key={image.id} image={image}/>
    });
  }

  render() {
    return(
      <div>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

export default PhotoFeed;
