class TrailsController < ApplicationController

    def show
        
    end

    def index
    trails = Trail.all
    render json: trails
    end

end
