export const createFollowing = followeeId => {
  return $.ajax({
    method: "POST",
    url: "/api/followings",
    data: {following: { followee_id: followeeId }}
  });
};

export const deleteFollowing = followeeId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/followings/${followeeId}`
  });
};
