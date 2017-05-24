export const fetchUsers = userName => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/`,
    data: {userName: userName}
  });
};
