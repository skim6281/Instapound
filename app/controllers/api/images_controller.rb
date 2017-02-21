class Api::ImagesController < ApplicationController
  before_action :require_login!

  def index
    if params[:user_username]
      user = User.find_by(username: params[:user_username])
      if user
        @images = user.images.order('created_at DESC')
      else
        @images = []
      end
    else
      users = [current_user] + current_user.followees
      @images = Image.includes(:user).where(user: users).order('created_at DESC')
    end
    render 'api/images/index'
  end

  def create
    @image = Image.new(image_params)
    @image.user = current_user
    if @image.save
      render 'api/images/show'
    else
      render json: @image.errors.full_messages, status: 422
    end
  end

  def destroy
    @image = current_user.images.find(params[:id])
    @image.destroy
  end

  private

  def image_params
    params.require(:image).permit(:caption, :location, :photo)
  end
end
