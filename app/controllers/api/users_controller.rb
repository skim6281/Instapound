class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show_current_user'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(username: params[:username])
    @user_images = @user.images
    render 'api/users/show'
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
