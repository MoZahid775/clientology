class NotesController < ApplicationController

    before_action :authorized, only: [:create, :destroy]

    def create
           
        note = Note.create(notes_params)
        render json: note
    end


    def destroy
        note = @user.notes.find(params[:id])
        params
        note.destroy
        render json: {}
    end

    def index
       notes = Note.all
       render json: notes

    end

    def notes_params
        params.permit( :note, :client_id)
    end


end
