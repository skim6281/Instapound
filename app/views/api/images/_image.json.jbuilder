json.id image.id
json.author_name image.user.username
json.author_profile_pic_url asset_path(image.user.profile_pic.url)
json.location image.location
json.caption image.caption
json.uploaded_at image.created_at.to_s
json.photo_url image.photo.url
json.photo_url_thumb image.photo.url(:thumb)
json.likes image.likes.pluck(:user_id)
json.created_at image.created_at
json.comments image.comments.each do |comment|
  json.partial! "api/comments/comment", comment: comment
end
