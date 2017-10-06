require 'sinatra/json'

get '/' do
	@user = User.find(1)
  erb :index
end

post '/vote/add/fav/:tweet_id/:user_id' do #tweet id
	tweet = Tweet.find_by(id: params[:tweet_id])
	
	tweet.favorites << Favorite.create(user_id: params[:user_id], tweet_id: params[:tweet_id])
	tweet.save

	if request.xhr?
	json count: tweet.favorites.all.count
	else
		redirect '/'
	end
end	

post '/vote/add/retweet/:tweet_id/:user_id' do #tweet id
	tweet = Tweet.find_by(id: params[:tweet_id])
	tweet.retweets << Retweet.create(user_id: params[:user_id], tweet_id: params[:tweet_id])
	tweet.save
	if request.xhr?
	json count: tweet.retweets.all.count
	else
		redirect '/'
	end
	
end	

post '/vote/add/reply/:tweet_id/:user_id' do #tweet id
	tweet = Tweet.find_by(id: params[:tweet_id])
	tweet.replies << Reply.create(user_id: params[:user_id], tweet_id: params[:tweet_id])
	tweet.save
	if request.xhr?
	json count: tweet.replies.all.count
	else
		redirect '/'
	end
	
end	