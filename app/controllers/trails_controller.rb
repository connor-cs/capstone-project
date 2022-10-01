class TrailsController < ApplicationController

    def show
        trails = Trail.find_by(state: params[:state], city: params[:city])
        render json: trails, status: :ok
    end

    def index
    trails = Trail.all
    render json: trails
    end

    # do I need to send a state_id instead of a name?
    private

    def trail_params
        params.permit(:city, :state)
    end

end
