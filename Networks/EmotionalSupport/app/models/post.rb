class Post < ApplicationRecord
	belongs_to :user 
	has_many :comments, dependent: :destroy #when a post is destroy all the comments are destroyed
end
