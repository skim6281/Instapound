import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { image } = this.props;
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
                    <a className="author-name" onClick={this.closeModal}>{image.author_name}</a>
                  </div>
                </header>
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
