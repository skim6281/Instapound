import { connect } from 'react-redux';
import { fetchImages } from '../../actions/image_actions';
import PhotoFeed from './photo_feed';
import { selectAllImages } from '../../reducers/selectors';
import { createLike, deleteLike } from '../../actions/like_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    images: selectAllImages(state.photoFeed.images)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchImages: () => dispatch(fetchImages()),
    createLike: (imageId) => dispatch(createLike(imageId)),
    deleteLike: (imageId) => dispatch(deleteLike(imageId)),
    createComment: (comment) => dispatch(createComment(comment))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeed);
