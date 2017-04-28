class Api::UsersController < ApplicationController
  def index
    @users = User.search_by_username(user_params[:username])
    render 'api/users/index' if @users
  end

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
    @user = User.includes(:images, :followers, :followees).find_by(username: params[:username])
    if @user
      if @user == current_user
        render 'api/users/show_current_user'
      else
        render 'api/users/show'
      end
    else
      render json: ["User not found"], status: 422
    end
  end

  def update
    @user = current_user
    if @user.update(user_params)
      render 'api/users/show_current_user'
    else
      render json: ["Not logged in"], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :profile_pic, :name, :bio)
  end
end
