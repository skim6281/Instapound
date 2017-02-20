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

export const updateUserProfilePic = formData => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${formData.get("user[username]")}`,
    contentType: false,
    processData: false,
    data: formData
  });
};
