class AddWebsiteToArticle < ActiveRecord::Migration[5.1]
  def change
    add_column :articles, :website, :text
  end
end
