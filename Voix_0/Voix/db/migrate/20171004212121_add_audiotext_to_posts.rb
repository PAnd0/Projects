class AddAudiotextToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :audio, :LONGTEXT
  end
end
