class ProfilesController < ApplicationController
 
    before_action :authorized, only: [:create, :destroy]

    def create
        profile = Profile.create(notes_params)
        render json: profile
    end


    def destroy
        profile = @user.profiles.find(params[:id])
        params
        profile.destroy
        render json: {}
    end

    def index
       profiles = Profile.all
       render json: profiles

    end

    def profiles_params
        params.permit( :profile, :client_id)
    end


end
