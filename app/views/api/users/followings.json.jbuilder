json.partial! "api/users/user", user: @user

@user.followers.each do |follower|
  json.followers do
    json.set! follower.id do
      json.id follower.id
      json.username follower.username
      json.profile_pic_url asset_path(follower.profile_pic.url)
    end
  end
end
