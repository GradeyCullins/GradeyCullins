# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    posts = BlogPost.published.includes(:tags).recent_first.limit(3)
    render inertia: 'LandingPage', props: {
      posts: posts.map(&:as_json)
    }
  end
end
