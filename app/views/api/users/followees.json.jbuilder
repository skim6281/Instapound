json.partial! "api/users/user", user: @user

@user.followees.each do |following|
  json.followings do
    json.set! following.id do
      json.id following.id
      json.username following.username
      json.profile_pic_url asset_path(following.profile_pic.url)
    end
  end
end
