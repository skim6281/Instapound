json.array!(@users) do |user|
  json.profile_pic_url asset_path(user.profile_pic.url)
  json.profile_pic user.profile_pic
  json.username user.username
end
