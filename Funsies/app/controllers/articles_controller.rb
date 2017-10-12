class ArticlesController < ApplicationController
	
	def index
		@a = Article.where(id: rand(1...Article.count+1))
		
	end

	def new
		@article = Article.new
	end

	def create 
	
		@article = Article.create( article_params )
	
		@article.save
		redirect_to new_article_path
	end

	private 

	def article_params
		 params.require(:article).permit(:data,:website)
	end
end
