export const createComment = comment => {
  return $.ajax({
    method: "POST",
    url: `api/images/${comment.image_id}/comments`,
    data: { comment }
  });
};

export const deleteComment = commentId => {
  return $.ajax({
    method: "DELETE",
    url: `api/comments/${commentId}`
  });
};

export const createImageComment = comment => {
  return $.ajax({
    method: "POST",
    url: `api/images/${comment.image_id}/comments`,
    data: { comment }
  });
};

export const deleteImageComment = commentId => {
  return $.ajax({
    method: "DELETE",
    url: `api/comments/${commentId}`
  });
};