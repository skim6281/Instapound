class Api::FollowingsController < ApplicationController
  before_action :require_login!

  def create
    @followings = Following.new(followings_params)
    @followings.follower = current_user
    if @followings.save
      render 'api/images/index'
    else
      render json: @followings.errors.full_messages, status: 422
    end
  end

  def destroy
    @followings = current_user.followings.find(params[:id])
    @followings.destroy
    render 'api/images/index'
  end

  private

  def followings_params
    params.require(:followings).permit(:followee)
  end
end
