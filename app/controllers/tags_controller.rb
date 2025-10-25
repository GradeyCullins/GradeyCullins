class TagsController < ApplicationController
  before_action :set_tag, only: %i[show update destroy]

  def index
    tags = Tag.alphabetical
    render json: serialize(tags), status: :ok
  end

  def show
    render json: serialize(@tag), status: :ok
  end

  def create
    tag = Tag.new(tag_params)
    if tag.save
      render json: serialize(tag), status: :created
    else
      render json: { errors: tag.errors.to_hash(full_messages: true) }, status: :unprocessable_entity
    end
  end

  def update
    if @tag.update(tag_params)
      render json: serialize(@tag), status: :ok
    else
      render json: { errors: @tag.errors.to_hash(full_messages: true) }, status: :unprocessable_entity
    end
  end

  def destroy
    @tag.destroy
    head :no_content
  end

  private

  def set_tag
    identifier = params[:slug] || params[:id]
    @tag = Tag.find_by(slug: identifier)
    @tag ||= Tag.find(identifier)
  end

  def tag_params
    params.require(:tag).permit(:name, :slug)
  end

  def serialize(resource)
    options =
      if resource.respond_to?(:to_ary)
        { each_serializer: TagSerializer }
      else
        { serializer: TagSerializer }
      end

    ActiveModelSerializers::SerializableResource.new(resource, options)
  end
end
