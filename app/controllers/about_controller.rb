class AboutController < ApplicationController
  def index
    posts = BlogPost.published.includes(:tags).recent_first
    render inertia: "AboutPage", props: { posts: posts.map(&:as_json) }
  end
end
