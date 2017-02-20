export const fetchUser = username => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${username}`
  });
};

export const fetchUserImages = username => {
 return $.ajax({
   method: 'GET',
   url: `api/images/${username}`
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
