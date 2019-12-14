class CreateLikedBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :liked_books do |t|
      t.integer :user_id
      t.integer :book_id
      t.string :isbn

      t.timestamps
    end
  end
end
