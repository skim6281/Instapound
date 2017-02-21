class Api::FollowingsController < ApplicationController
  before_action :require_login!

  def create
    @following = Following.new(following_params)
    @following.follower_id = current_user.id
    if @following.save
      @follower = User.find(@following.follower_id)
      render 'api/followings/show_follower'
    else
      render json: @following.errors.full_messages, status: 422
    end
  end

  def destroy
    @following = Following.find_by(followee_id: params[:id], follower_id: current_user.id)
    if @following.destroy
      @follower = User.find(@following.follower_id)
      render 'api/followings/show_follower'
    else
      render json: @following.errors.full_messages, status: 422
    end
  end

  private

  def following_params
    params.require(:following).permit(:followee_id, :follower_id)
  end
end
