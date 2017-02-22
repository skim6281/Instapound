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

  private

  def comment_params
    params.require(:comment).permit(:body, :image_id, :user_id)
  end
end
