export const createComment = comment => {
  return $.ajax({
    method: "POST",
    url: `api/images/${comment.image_id}/comments`,
    data: { comment }
  });
};

export const deleteComment = comment => {
  return $.ajax({
    method: "DELETE",
    url: `api/images/${comment.image_id}/comments/${comment.id}`
  });
};
