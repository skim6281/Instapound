export const fetchUsers = userName => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/`,
    data: {userName: userName}
  });
};

export const fetchUser = username => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${username}`
  });
};

export const updateUser = user => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${user.username}`,
    data: { user }
  });
};
