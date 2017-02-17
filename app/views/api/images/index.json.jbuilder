@images.each do |image|
  json.set! image.id do
    json.partial! "api/images/image", image: image
    json.author_profile_pic_url image.user.profile_pic.url
  end
end
