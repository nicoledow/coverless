class AddReadToLikedBooks < ActiveRecord::Migration[6.0]
  def change
    add_column :liked_books, :read, :boolean, :default => false
  end
end
