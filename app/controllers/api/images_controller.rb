class Api::ImagesController < ApplicationController
  before_action :require_login!

  def index
    users = []
    if logged_in?
      users << current_user
      current_user.followees.each do |user|
        users << user
      end
      @images = Image.where(user: users)
    end
    render 'api/images/index'
  end

  def new
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

  def show
    @images = User.find_by(username: params[:username]).images
    render '/api/images/index'
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
