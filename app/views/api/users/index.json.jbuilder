json.array!(@users) do |user|
  json.id = user.id
  json.profile_pic_url asset_path(user.profile_pic.url(:thumb))
  json.profile_pic user.profile_pic
  json.username user.username
  json.name user.name
end
