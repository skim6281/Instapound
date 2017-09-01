import React from 'react';
import Post from './post';
import LoadingIcon from '../loading_icon';
import Waypoint from 'react-waypoint';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 5,
      offset: 0
    }
    this.getPosts = this.getPosts.bind(this);
  }

  componentWillMount(){
    this.getPosts();
  }

  getPosts() {
    console.log(this.state.offset);
    this.setState({offset: this.state.offset + this.state.limit});
    this.props.fetchImages(this.state.limit, this.state.offset);
  }

  renderPosts() {
    const { images, currentUser, createLike, deleteLike, createComment, deleteComment } = this.props;
    images.sort((a,b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });
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
