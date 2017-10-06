class User < ActiveRecord::Base
  # Remember to create a migration!
  has_many :tweets

  has_many :favorites

  has_many :retweets

  has_many :replies

  
  has_many :follower_follows, foreign_key: :followee_id, class_name: "Follow"
  has_many :followers, through: :follower_follows, source: :follower 
  
  has_many :followee_follows, foreign_key: :follower_id, class_name: 'Follow'
  has_many :followees, through: :followee_follows, source: :followee
end
