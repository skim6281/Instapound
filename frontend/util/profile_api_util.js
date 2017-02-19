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
