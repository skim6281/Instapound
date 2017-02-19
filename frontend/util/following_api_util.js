export const createFollowing => follloweeId => {
  return $.ajax({
    method: "POST",
    url: "/api/followings",
    data: {followings: { followeeId }}
  });
};

export const deleteFollowing => followeeId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/followings/${id}`
  });
};
