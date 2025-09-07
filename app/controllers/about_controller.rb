class AboutController < ApplicationController
  def index
    posts = BlogPost.all
    render inertia: "AboutPage", props: { posts: posts }
  end
end
