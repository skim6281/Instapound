import { LOAD_IMAGE, RECEIVE_USER_IMAGES } from '../actions/image_actions';

const initialState = {
  imageLoading: false,
  indexLoading: false
}

export default (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOAD_IMAGE:
      return Object.assign({}, state, { imageLoading: true});
    default:
      return initialState;
  }
}
