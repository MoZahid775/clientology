class PurchasesController < ApplicationController

    before_action :authorized, only: [:create, :destroy]

    def create
           
        purchase = Purchase.create(purchases_params)
        render json: purchase
    end


    def destroy
        purchase = @user.purchases.find(params[:id])
        params
        purchase.destroy
        render json: {}
    end

    def index
       purchases = Purchase.all
       render json: purchases

    end

    def purchases_params
        params.permit( :product_name, :size, :date_of_purchase, :dollar_amt, :return_indicator, :client_id)
    end


end
