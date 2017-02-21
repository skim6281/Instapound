export const createLike = imageId => {
  return $.ajax({
    method: "POST",
    url: "/api/likes",
    data: {like: { image_id: imageId }}
  });
};

export const deleteLike = imageId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/likes/${imageId}`
  });
};
