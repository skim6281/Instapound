import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PhotoFeedReducer from './photo_feed_reducer';
import ProfileReducer from './profile_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  photoFeed: PhotoFeedReducer,
  profile: ProfileReducer
});

export default RootReducer;
