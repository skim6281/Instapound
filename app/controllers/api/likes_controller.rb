class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    if @like.save
      @image = Image.find(@like.image_id)
      render 'api/images/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by(image_id: params[:id], user_id: current_user.id)
    if @like.destroy
      @image = Image.find(@like.image_id)
      render 'api/images/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:image_id, :user_id)
  end
end
