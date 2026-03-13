class AddIpAddressToChats < ActiveRecord::Migration[8.0]
  def change
    add_column :chats, :ip_address, :string
    add_index :chats, :ip_address
  end
end
