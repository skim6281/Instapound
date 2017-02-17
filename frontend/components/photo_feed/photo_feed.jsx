import React from 'react';
import Post from './post';
import NavBarContainer from '../nav_bar/nav_bar_container';

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
        <div>
          <NavBarContainer/>
        </div>
        <div className='photo-feed-container'>
          <div>
            {this.renderPosts()}
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoFeed;
