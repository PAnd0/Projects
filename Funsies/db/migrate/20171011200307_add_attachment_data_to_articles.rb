class AddAttachmentDataToArticles < ActiveRecord::Migration[4.2]
  def self.up
    change_table :articles do |t|
      t.attachment :data
    end
  end

  def self.down
    remove_attachment :articles, :data
  end
end
