class BlogPostsController < ApplicationController
  before_action :set_blog_post, only: %i[show update destroy]

  def index
    posts = BlogPost.includes(:tags).recent_first
    render json: serialize(posts), status: :ok
  end

  def show
    render json: serialize(@blog_post), status: :ok
  end

  def create
    blog_post = BlogPost.new(blog_post_params)
    if blog_post.save
      render json: serialize(blog_post), status: :created
    else
      render json: { errors: blog_post.errors.to_hash(full_messages: true) }, status: :unprocessable_entity
    end
  end

  def update
    if @blog_post.update(blog_post_params)
      render json: serialize(@blog_post), status: :ok
    else
      render json: { errors: @blog_post.errors.to_hash(full_messages: true) }, status: :unprocessable_entity
    end
  end

  def destroy
    @blog_post.destroy
    head :no_content
  end

  private

  def set_blog_post
    identifier = params[:slug] || params[:id]
    @blog_post = BlogPost.includes(:tags).find_by(slug: identifier)
    @blog_post ||= BlogPost.includes(:tags).find(identifier)
  end

  def blog_post_params
    params.require(:blog_post).permit(
      :title,
      :slug,
      :excerpt,
      :content_mdx,
      :status,
      :published_at,
      tag_ids: [],
      tags_attributes: %i[id name slug]
    )
  end

  def serialize(resource)
    options =
      if resource.respond_to?(:to_ary)
        { each_serializer: BlogPostSerializer }
      else
        { serializer: BlogPostSerializer }
      end

    ActiveModelSerializers::SerializableResource.new(resource, options)
  end
end
