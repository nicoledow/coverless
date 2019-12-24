class AddAmazonUrlToLikedBooks < ActiveRecord::Migration[6.0]
  def change
    add_column :liked_books, :amazon_url, :string
  end
end
