class PortfolioController < ApplicationController
  def index
    render inertia: 'PortfolioPage'
  end
end
