import React from 'react';
import Modal from 'react-modal';
import { hashHistory, Link } from 'react-router';
import CommentForm from '../comment_form';

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
    // this.linkToAuthor = this.linkToAuthor.bind(this);
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

  renderComments() {
    return this.props.image.comments.map(comment => {
      return (
        <li key={comment.id}>
          <h2 className="comment-head">
            <span className="comment-name name text">{comment.author_name}</span>
            <span className="caption text">{comment.body}</span>
          </h2>
          <div>
            {this.renderDeleteComment(comment.id)}
          </div>
        </li>
      );
    })
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
  // linkToAuthor() {
  //   hashHistory.push(`${this.props.image.author_name}`);
  //   this.closeModal();
  // }

  render() {
    const { image, currentUser, createImageLike, deleteImageLike, createImageComment, deleteImageComment } = this.props;
    return (
      <div className="profile-image">
        <a onClick={this.openModal}>
          <img src={image.photo_url}/>
        </a>
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
                  <img className="post-author-profile-pic" src={image.author_profile_pic_url}/>
                  <div>
                    <a className="author-name" >{image.author_name}</a>
                  </div>
                </header>
                <section className="image-comments-body">
                  <div className="likes text">{image.likes.length} likes</div>
                  <section className="image-comments-section">
                    <ul className="image-comments-list">
                      {this.renderComments()}
                    </ul>
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
