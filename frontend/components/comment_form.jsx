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
    const comment = this.state;
    e.which = e.which || e.keyCode;
    if (e.which == 13) {
      this.props.createComment(comment);
      document.getElementById("comment-form-input").value = "";
    }
  }

  render() {
    return (
      <form className="comment-form">
        <input
          id="comment-form-input"
          className="comment-input"
          type="text"
          onKeyUp={this.handleSubmit}
          onChange={this.update}
          placeholder="Add a comment..."/>
      </form>
    )
  }
}

export default CommentForm;
