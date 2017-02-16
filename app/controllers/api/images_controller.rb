class Api::ImagesController < ApplicationController
  before_filter :require_login!

  def index
    @images = current_user.images
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
  end

  def destroy
  end

  private

  def image_params
    params.require(:image).permit(:caption, :location)
  end
end
