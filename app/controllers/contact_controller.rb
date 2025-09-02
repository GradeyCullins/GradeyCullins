class ContactController < ApplicationController
  def index
    render inertia: 'ContactPage'
  end
end
