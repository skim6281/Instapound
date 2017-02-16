export const fetchImages = (user) => {
  return $.ajax({
    method: 'GET',
    url: '/api/images',
    data: { user }
  });
}
