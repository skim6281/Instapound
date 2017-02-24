import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_id: this.props.imageId,
      user_id: this.props.currentUserId,
      body: ""
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    this.setState({body: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({body: ""});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="comment-form">
        <input
          id="comment-form-input"
          className="comment-input"
          type="text"
          onChange={this.update}
          placeholder="Add a comment..."
          value={this.state.body}/>
      </form>
    )
  }
}

export default CommentForm;
