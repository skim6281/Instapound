import React from 'react';
import Modal from 'react-modal';
import { hashHistory, Link } from 'react-router';
import CommentForm from '../comment_form';
import {time_ago} from '../../util/util';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleImageLike = this.handleImageLike.bind(this);
    this.handleImageUnlike = this.handleImageUnlike.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
    this.redirectToUser = this.redirectToUser.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleImageLike(){
    this.props.createImageLike(this.props.image.id);
  }

  handleImageUnlike(){
    this.props.deleteImageLike(this.props.image.id);
  }

  renderImageLikeButton() {
    if (this.props.image.likes.includes(this.props.currentUser.id)){
      return (
        <button onClick={this.handleImageUnlike}>
          <img src={window.images.fillHeart}/>
        </button>
      )
    } else {
      return (
        <button onClick={this.handleImageLike}>
          <img src={window.images.heart}/>
        </button>
      )
    }
  }

  redirectToUser(username) {
    if (username === this.props.user.username) {
      return e => this.closeModal();
    } else {
      return e => {
        this.closeModal();
        hashHistory.push(`${username}`);
      }
    }
  }

  renderComments() {
    return this.props.image.comments.map(comment => {
      return (
        <li key={comment.id}>
          <h2 className="image-comment-head">
            <span className="comment-name name text">
              <a className="link" onClick={this.redirectToUser(comment.author_name)}>
                {comment.author_name}
              </a>
            </span>
            <span className="caption text">{comment.body}</span>
          </h2>
          <div>
            {this.renderDeleteComment(comment.id)}
          </div>
        </li>
      );
    });
  }

  handleDeleteComment(commentId) {
    return e => {
      this.props.deleteImageComment(commentId);
    }
  }

  renderDeleteComment(commentId) {
    const currentUser = this.props.currentUser;
    const image = this.props.image;
    if (currentUser.username === image.author_name) {
      return (
        <button
          className="delete-comment"
          onClick={this.handleDeleteComment(commentId)}>
          <img src={window.images.deleteButton}/>
        </button>
      )
    }
  }

  renderCaption() {
    const image = this.props.image
    if (image.caption) {
      return (
        <h1 className="modal-caption-head">
          <a onClick={this.closeModal} className="comment-name name text link">
            {image.author_name}
          </a>
          <span className="caption text">{image.caption}</span>
        </h1>
      )
    }
  }

  render() {
    const { image, user, currentUser, createImageLike, deleteImageLike, createImageComment, deleteImageComment } = this.props;
    return (
      <div className="profile-image">
        <a onClick={this.openModal}>
          <img src={image.photo_url_thumb}/>
        </a>
        <content className="image-likes-comments">
          <div className="image-likes">
            <div>
              <img src={window.images.like}/>
            </div>
            <span>{image.likes.length}</span>
          </div>
          <div className="image-comments">
            <div>
              <img src={window.images.comment}/>

            </div>
            <span>{image.comments.length}</span>
          </div>
        </content>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          overlayClassName="overlay"
          className="image-modal"
          contentLabel="image"
        >
          <main>
            <section className="image-modal-section">
              <div className="image-modal-photo">
                <img src={image.photo_url} />
              </div>
              <div className="image-modal-fields">
                <header className="image-modal-header">
                  <img className="modal-post-author-profile-pic" src={user.profile_pic_url}/>
                  <div className="post-author-name-location">
                    <a onClick={this.closeModal} className="author-name link" >{image.author_name}</a>
                    <span className="location text">{image.location}</span>
                  </div>
                </header>
                <section className="image-comments-body">
                  <div className="likes-time-div">
                    <div className="text">{image.likes.length} likes</div>
                    <div className="image-time-ago">
                      {time_ago(image.uploaded_at)}
                    </div>
                  </div>
                  <section className="image-comments-section">
                    <div className="image-comments-list-container">
                      {this.renderCaption()}
                      <ul className="image-comments-list">
                        {this.renderComments()}
                      </ul>
                    </div>
                  </section>
                  <footer className="image-comment-footer">
                    <div className="heart">
                      {this.renderImageLikeButton()}
                    </div>
                    <div className="comment-div">
                      <CommentForm
                        imageId={image.id}
                        currentUserId={currentUser.id}
                        createComment={createImageComment}/>
                    </div>
                  </footer>
                </section>
              </div>
            </section>
            <button className="exit" onClick={this.closeModal}>
              <img src={window.images.exit}/>
            </button>
          </main>
        </Modal>
      </div>
    );
  }
}

export default Image;
