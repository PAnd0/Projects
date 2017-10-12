class Tweet < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :user
  has_many :favorites
  has_many :retweets
  has_many :replies
end
