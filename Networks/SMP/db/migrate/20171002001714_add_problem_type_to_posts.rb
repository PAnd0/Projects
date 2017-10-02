class AddProblemTypeToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :prob_type, :string
  end
end
