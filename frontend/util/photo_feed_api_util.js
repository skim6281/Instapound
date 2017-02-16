export const fetchImages = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/images'
  });
};
