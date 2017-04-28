@users.each do |user|
  json.set! user.id do
    json.profile_pic_url asset_path(user.profile_pic.url)
    json.profile_pic user.profile_pic
    json.bio user.bio
    json.name user.name
  end
end
