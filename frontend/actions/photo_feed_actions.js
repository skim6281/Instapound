import * as PhotoFeedAPIUtil from '../util/photo_feed_api_util';

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';

export const receiveImages = images => ({
  type: RECEIVE_IMAGES,
  images
});

export const fetchImages = () => dispatch => {
  return PhotoFeedAPIUtil.fetchImages()
    .then(images => dispatch(receiveImages(images)));
};
