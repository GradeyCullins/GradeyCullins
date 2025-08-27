class BlogController < ApplicationController
  def index
    posts = [
      {
        :title => 'Post 1',
        :description => 'here is post 1'
      },
      {
        :title => 'Post 2',
        :description => 'here is post 2'
      }
    ]
    # render inertia: 'InertiaExample', props: {
    #   name: params.fetch(:name, 'zzz'),
    # }
    render inertia: 'Blog', props: {
      posts: posts
    }
  end
end
