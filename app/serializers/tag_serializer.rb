class TagSerializer < ActiveModel::Serializer
  attributes :id, :name, :slug, :created_at, :updated_at

  attribute :createdAt do
    object.created_at
  end

  attribute :updatedAt do
    object.updated_at
  end
end
