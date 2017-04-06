json.id user.id
json.username user.username
json.profile_pic_url asset_path(user.profile_pic.url(:thumb))
json.profile_pic user.profile_pic
json.bio user.bio
json.name user.name
json.followers user.followers do |follower|
  json.id follower.id
  json.username follower.username
  json.profile_pic_url asset_path(follower.profile_pic.url)
end
json.followings user.followees do |followee|
  json.id followee.id
  json.username followee.username
  json.profile_pic_url asset_path(followee.profile_pic.url)
end
