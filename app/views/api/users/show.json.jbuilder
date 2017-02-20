json.partial! "api/users/user", user: @user
json.followers @user.followers do |follower|
  json.id follower.id
  json.username follower.username
  json.profile_pic_url follower.profile_pic.url
end
json.followings @user.followees do |followee|
  json.id followee.id
  json.username followee.username
  json.profile_pic_url followee.profile_pic.url
end
