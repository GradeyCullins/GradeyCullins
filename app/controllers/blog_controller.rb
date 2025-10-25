class BlogController < ApplicationController
  def index
    posts = BlogPost.published.includes(:tags).recent_first
    render inertia: "BlogPage", props: {
      posts: posts.map(&:as_json)
    }
  end

  def show
    post = BlogPost.published.includes(:tags).find_by!(slug: params[:slug])
    render inertia: "BlogPost", props: {
      post: post.as_json
    }
  rescue
    render inertia: "NotFound"
  end
end
