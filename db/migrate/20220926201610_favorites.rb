class Favorites < ActiveRecord::Migration[6.1]
  def change
    add_column :favorites, :user_id, :integer
    add_column :favorites, :trail_id, :integer
  end
end
