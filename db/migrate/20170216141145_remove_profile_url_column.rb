class RemoveProfileUrlColumn < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :profile_url
  end
end
