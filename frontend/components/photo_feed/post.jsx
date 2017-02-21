import React from 'react';
import { time_ago } from '../../util/util';
import { Link } from 'react-router';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image } = this.props;
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
          <div className="likes text">Likes</div>
          <div className="image-caption">
            <h1 className="caption-head">
              <Link to={`${image.author_name}/`} className="comment-name name text">{image.author_name}</Link>
              <span className="caption text">{image.caption}</span>
            </h1>
          </div>
          <section className="add-comment">
            Add a comment...
          </section>
        </footer>

      </div>
    )
  }
}

export default Post;
