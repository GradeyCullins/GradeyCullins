# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    posts = BlogPost.all
    render inertia: 'LandingPage', props: {
      posts: posts
    }
  end
end