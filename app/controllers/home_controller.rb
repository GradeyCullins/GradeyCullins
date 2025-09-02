# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    posts = BlogPost.all
    render inertia: 'Home', props: {
      posts: posts
    }
    # render inertia: 'InertiaExample', props: {
    #   name: params.fetch(:name, 'zzz'),
    # }
  end
end