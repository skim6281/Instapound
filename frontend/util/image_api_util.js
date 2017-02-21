export const fetchImage = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/images/${id}`
  });
};

export const createImage = image => {
  return $.ajax({
    method: 'POST',
    url: '/api/images',
    data: { image }
  });
};

export const deleteImage = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/images/${id}`
  });
};
