import React from 'react';
import Post from './post';
import LoadingIcon from '../loading_icon';
import Waypoint from 'react-waypoint';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount(){
    this.getPosts();
  }

  getPosts() {
    this.props.fetchImages(this.state.page).then(this.setState({page: this.state.page + 1}));
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

  renderMorePosts(){
    return(
      <div className="loader">
      <Waypoint onEnter={this.getPosts}/>
      </div>
    )
  }

  render() {
    return(
      <div>
        <div className='photo-feed-container'>
          <div>
            {this.renderPosts()}
          </div>
          {this.renderMorePosts()}
        </div>
      </div>
    )
  }
}

export default PhotoFeed;
