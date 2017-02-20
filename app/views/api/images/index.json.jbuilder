json.array! @images.each do |image|
  json.partial! "api/images/image", image: image
  json.author_profile_pic_url image.user.profile_pic.url
end
