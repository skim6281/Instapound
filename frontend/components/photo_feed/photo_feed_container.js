import { connect } from 'react-redux';
import { fetchImages } from '../../actions/photo_feed_actions';
import PhotoFeed from './photo_feed';
import { selectAllImages } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return ({
    images: selectAllImages(state.images)
  });
};


const mapDispatchToProps = (dispatch) => {
  return ({
    fetchImages: () => dispatch(fetchImages())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeed);
