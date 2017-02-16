class Api::ImagesController < ApplicationController
  before_filter :require_login!

  def index
    @images = current_user.images
    render :index
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
    render :show
  end

  def destroy
    @image = current_user.images.find(params[:id])
    @image.destroy
    render :index
  end

  private

  def image_params
    params.require(:image).permit(:caption, :location)
  end
end
