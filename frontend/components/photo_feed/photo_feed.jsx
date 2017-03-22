import React from 'react';
import Post from './post';
import LoadingIcon from '../loading_icon';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchImages();
  }

  renderPosts() {
    return this.props.images.map(image => {
      return (
        <Post
          key={image.id}
          image={image}
          currentUser={this.props.currentUser}
          createLike={this.props.createLike}
          deleteLike={this.props.deleteLike}
          createComment={this.props.createComment}
          deleteComment={this.props.deleteComment}
        />
      )
    });
  }

  render() {
    return this.props.loading ?
      <LoadingIcon /> :
      <div>
        <div className='photo-feed-container'>
          <div>
            {this.renderPosts()}
          </div>
        </div>
      </div>
  };
}

export default PhotoFeed;
