class BlogController < ApplicationController
  def index
    posts = BlogPost.all
    render inertia: 'BlogPage', props: {
      posts: posts.as_json
    }
  end

  def show
    post = BlogPost.find_by(title: params[:title])
    render inertia: 'BlogPost', props: {
      post: post.as_json
    }
  end
end
