import React from 'react';
import { time_ago } from '../../util/util';
import { Link } from 'react-router';
import CommentForm from '../comment_form';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadMoreComments: false
    }
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
    this.loadMore = this.loadMore.bind(this);
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

  loadMore() {
    this.setState({loadMoreComments: true});
    this.renderComments();
  }

  renderComments() {
    const allComments = this.props.image.comments;
    // allComments.sort((a,b) => {
    //   return new Date(a.created_at) - new Date(b.created_at);
    // });
    if (allComments.length > 4 && !this.state.loadMoreComments) {
      const lastComments = allComments.slice(allComments.length - 4, allComments.length);
      return(
        <div>
          <button className="load-more-comments" onClick={this.loadMore}>load more comments</button>
          <ul>
            {this.showComments(lastComments)}
          </ul>
        </div>
      )
    } else {
      return (
        <ul>
          {this.showComments(this.props.image.comments)}
        </ul>
      )
    }
  }

  showComments(comments) {
    console.log('comments');
    console.log(comments);
    return comments.map(comment => {
      return (
        <li key={comment.id}>
          <h2 className="comment-head">
            <Link
              to={`${comment.author_name}`}
              className="comment-name name text">
              {comment.author_name}
            </Link>
            <span className="caption text">{comment.body}</span>
          </h2>
        </li>
      );
    })
  }

  renderCaption() {
    const image = this.props.image
    if (image.caption) {
      return (
        <h1 className="caption-head">
          <Link to={`${image.author_name}/`} className="comment-name name text">{image.author_name}</Link>
          <span className="caption text">{image.caption}</span>
        </h1>
      )
    }
  }

  render() {
    const { image, createLike, deleteLike, createComment, currentUser } = this.props;
    return(
      <div className="post-container">
        <header className="post-header">
          <div className="post-user">
            <img className="post-author-profile-pic" src={image.author_profile_pic_url}/>
            <div className="post-author-name">
              <Link to={`${image.author_name}/`} className="author-name text">{image.author_name}</Link>
              <span className="location text">{image.location}</span>
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
              {this.renderCaption()}
              <ul className="comments-list">
                {this.renderComments()}
              </ul>
            </div>
          </section>
          <section className="comment-section">
            <div className="heart">
              {this.renderLikeButton()}
            </div>
            <div className="comment-div">
              <CommentForm
                imageId={image.id}
                currentUserId={currentUser.id}
                createComment={createComment}/>
            </div>
          </section>
        </footer>
      </div>
    )
  }
}

export default Post;
