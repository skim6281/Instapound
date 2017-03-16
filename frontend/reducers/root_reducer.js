import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PhotoFeedReducer from './photo_feed_reducer';
import ProfileReducer from './profile_reducer';
import LoadingReducer from './loading_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  photoFeed: PhotoFeedReducer,
  profile: ProfileReducer,
  loading: LoaingReducer
});

export default RootReducer;
