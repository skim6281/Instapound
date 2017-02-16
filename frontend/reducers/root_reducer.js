import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PhotoFeedReducer from './photo_feed_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  photoFeed: PhotoFeedReducer
});

export default RootReducer;
