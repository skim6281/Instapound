import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image } = this.props;
    return(
      <div className="post-container">
        <header className="post-header">
          <img className="post-author-profile-pic" src={image.author_profile_pic_url}/>
          <div className="post-author-name">
            <a className="name text">{image.author_name}</a>
          </div>
        </header>
        <img className="post-image" src={image.photo_url}/>
        <footer className="post-footer">
          <div className="likes text">Likes</div>
          <div className="image-caption">
            <div className="name text">{image.author_name}</div>
            <div className="caption text">{image.caption}</div>
          </div>
          <section className="text">
            Add a comment...
          </section>
        </footer>

      </div>
    )
  }
}

export default Post;
