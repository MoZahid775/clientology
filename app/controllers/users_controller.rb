class UsersController < ApplicationController
    before_action :authorized, only: [:me]

    def me
        wristband = encode_token({user_id: @user.id})
        render json: {user: UserSerializer.new(@user), token: wristband, client: @user.clients, notes: @user.notes, purchases: @user.purchases}
    end
    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user
        else
            render json: {errors: user.errors.full_messages}
        end
    end

    def login
        
        user = User.find_by(username: params[:formData][:username])
        if user && user.authenticate(params[:formData][:password])
            # wristband = JWT.encode({user_id: user.id}, 'password_that_you_should_change')
            wristband = encode_token({user_id: user.id})
        
            render json: {user: UserSerializer.new(user), token: wristband, clients: user.clients, notes: user.notes, purchases: user.purchases, profiles: user.profiles
        }
        else
            render json: {error: "incorrect username or password"}
        end
    end

    private

    def user_params
        params.permit(:username, :password, :name, :email, :age)
    end







end
