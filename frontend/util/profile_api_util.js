export const fetchUser = username => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${username}`
  });
};
 export const fetchImage = id => {
   return $.ajax({
     method: 'GET',
     url: `api/images/${id}`
   });
 };
