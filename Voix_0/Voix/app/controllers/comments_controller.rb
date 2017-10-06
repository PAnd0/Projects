class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]

  

  # POST /comments
  # POST /comments.json
  def create

    ## Might need to add something here to handle when the commment is added to post
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.post_id = params[:post_id]
   
      if @comment.save
        flash[:notice] = 'Comment was successfully created.'
        redirect_to posts_path
        
      else
        flash[:notice] = "Error creating comment: #{@comment.errors}"
        redirect_to posts_path
      end
  
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
 
    redirect_to posts_path
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:comment).permit(:user_id, :post_id, :c_audio)
    end
end
