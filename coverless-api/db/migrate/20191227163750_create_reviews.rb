class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.text :content
      t.integer :likedbook_id
      t.boolean :liked

      t.timestamps
    end
  end
end
