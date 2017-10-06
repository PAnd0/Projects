3.times do

	user = User.create(user_name: Faker::Name.name)
	tweet = Tweet.create(message: Faker::Lorem.sentence, user_id: rand(1..User.all.count))
	favorite = Favorite.create(user_id: rand(1..User.all.count), tweet_id: rand(1..Tweet.count))
	retweet = Retweet.create(user_id: rand(1..User.all.count), tweet_id: rand(1..Tweet.count))
	reply = Reply.create(user_id: rand(1..User.all.count), tweet_id: rand(1..Tweet.count))
end

20.times do 
	follow = Follow.create(follower_id: rand(1..User.all.count), followee_id: rand(1..User.all.count))
end