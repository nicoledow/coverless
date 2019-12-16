class CreateLikedBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :liked_books do |t|
      t.string :isbn
      t.string :title
      t.string :author
      t.text :blurb
      t.string :url
      t.string :image

      t.timestamps
    end
  end
end
