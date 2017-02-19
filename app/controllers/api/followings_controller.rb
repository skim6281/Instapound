class Api::FollowingsController < ApplicationController
  before_action :require_login!

  def create
    @following = Following.new(followings_params)
    @following.followee_id = current_user.id
    if @following.save
      render 'api/images/index'
    else
      render json: @followings.errors.full_messages, status: 422
    end
  end

  def destroy
    @following = current_user.followings.find_by(followee_id: params[:id])
    @following.destroy
    render 'api/images/index'
  end

  private

  def followings_params
    params.require(:followings).permit(:followee_id, :follower_id)
  end
end
