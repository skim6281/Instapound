import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image } = this.props;
    return(
      <li>
        <div>{image.photo}</div>
      </li>
    )
  }
}

export default Post;
