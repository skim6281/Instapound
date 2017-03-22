import {
  LOAD_IMAGE,
  LOAD_IMAGES,
  RECEIVE_USER_IMAGES,
  RECEIVE_IMAGES,
  RECEIVE_IMAGE
} from '../actions/image_actions';

const initialState = {
  imageLoading: false,
  indexLoading: false
}

export default (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_IMAGES:
    case RECEIVE_USER_IMAGES:
    case RECEIVE_IMAGE:
      return initialState;
    case LOAD_IMAGE:
      return Object.assign({}, state, { imageLoading: true});
    case LOAD_IMAGES:
      return Object.assign({}, state, { indexLoading: true});
    default:
      return state;
  }
}
