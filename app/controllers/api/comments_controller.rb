class Api::CommentsController < ApplicationController
  before_action :require_login!

  def index
    image = Image.find(params[:image_id])
    if image
      @comments = Comment.where(image: image)
    else
      @comments = []
    end
    render 'api/comments/index'
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render 'api/comments/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :image_id, :user_id)
  end
end
