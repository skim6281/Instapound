class Api::UsersController < ApplicationController
  def index

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
    @user = User.find_by(username: params[:username])
    if (@user)
      if @user == current_user
        render 'api/users/show_current_user'
      else
        render 'api/users/show'
      end
    else
      render json: ["User not found"], status: 422
    end
  end

  def followings
    user = User.find_by(username: params[:username])
    if (user)
      @followings = user.followings
      render 'api/users/followings'
    else
      render json: ["User not found"], status: 422
    end
  end

  def followers
    user = User.find_by(username: params[:username])
    if (user)
      @followers = user.followees
      render 'api/users/followers'
    else
      render json: ["User not found"], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
