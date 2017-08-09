import React from 'react';
import Post from './post';
import LoadingIcon from '../loading_icon';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }

  componentDidMount(){
    // this.props.fetchImages();
    this.getPosts();
  }

  getPosts() {
    this.props.fetchImages(this.state.page);
    this.setState = ({ page: this.state.page++ })
  }

  renderPosts() {
    const { images, currentUser, createLike, deleteLike, createComment, deleteComment } = this.props;
    return images.map(image => {
      return (
        <Post
          key={image.id}
          image={image}
          currentUser={currentUser}
          createLike={createLike}
          deleteLike={deleteLike}
          createComment={createComment}
          deleteComment={deleteComment}
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
