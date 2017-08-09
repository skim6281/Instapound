class Api::ImagesController < ApplicationController
  before_action :require_login!

  def index
    if params[:user_username]
      user = User.includes(:images, :followers, :followees).find_by(username: params[:user_username])
      if user
        @images = user.images.includes(:comments, :likes).order(created_at: :desc)
      else
        @images = []
      end
    else
      users = [current_user] + current_user.followees
      @images = Image.page(params[:page]).per(5).includes(:user, :comments, :likes).where(user: users).order(created_at: :desc)
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
