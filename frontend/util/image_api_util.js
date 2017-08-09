export const fetchImages = page => {
  return $.ajax({
    method: 'GET',
    url: '/api/images',
    data: { page }
  });
};

export const fetchUserImages = username => {
 return $.ajax({
   method: 'GET',
   url: `api/users/${username}/images`
 });
};

export const createImage = formData => {
  return $.ajax({
    method: 'POST',
    url: 'api/images',
    contentType: false,
    processData: false,
    data: formData
  });
};

export const updateUserProfilePic = (username, formData) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${username}`,
    dataType: 'json',
    contentType: false,
    processData: false,
    data: formData
  });
};
