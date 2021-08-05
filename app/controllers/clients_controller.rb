class ClientsController < ApplicationController
    before_action :authorized, only: [:create, :destroy]
    def create
       
        client = @user.clients.create(clients_params)
        render json: client
    end

    def destroy
        client = @user.clients.find(params[:id])
        client.destroy
        render json: client 
    end

    def index
       clients= Client.all
       render json: clients
    end


    def clients_params
        params.permit(:name, :age, :email, :profession, :phone, :birthday)
    end



end
