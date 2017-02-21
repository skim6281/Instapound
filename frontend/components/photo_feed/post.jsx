import React from 'react';
import { time_ago } from '../../util/util';
import { Link } from 'react-router';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
  }

  handleLike(){
    this.props.createLike(this.props.image.id);
  }

  handleUnlike(){
    this.props.deleteLike(this.props.image.id);
  }

  renderLikeButton() {
    if (this.props.image.likes.includes(this.props.currentUser.id)){
      return (
        <button onClick={this.handleUnlike}>
          <img src={window.images.fillHeart}/>
        </button>
      )
    } else {
      return (
        <button onClick={this.handleLike}>
          <img src={window.images.heart}/>
        </button>
      )
    }
  }

  render() {
    const { image, createLike, deleteLike } = this.props;
    return(
      <div className="post-container">
        <header className="post-header">
          <div className="post-user">
            <img className="post-author-profile-pic" src={image.author_profile_pic_url}/>
            <div className="post-author-name">
              <Link to={`${image.author_name}/`} className="author-name text">{image.author_name}</Link>
            </div>
          </div>
          <a className="time-ago">
            {time_ago(image.uploaded_at)}
          </a>
        </header>
        <img className="post-image" src={image.photo_url}/>
        <footer className="post-footer">
          <section className="likes-comments-section">
            <div className="likes text">
              {image.likes.length} likes
            </div>
            <div className="image-caption">
              <h1 className="caption-head">
                <Link to={`${image.author_name}/`} className="comment-name name text">{image.author_name}</Link>
                <span className="caption text">{image.caption}</span>
              </h1>
            </div>
          </section>
          <section className="comment-section">
            <div className="heart">
              {this.renderLikeButton()}
            </div>
            <div className="comment-div">
              Add a comment...
            </div>
          </section>
        </footer>

      </div>
    )
  }
}

export default Post;
