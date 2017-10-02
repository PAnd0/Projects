var AllPosts = React.createClass({ 
  handleDelete() {
        this.props.handleDelete(id);

    },
  render() { 
    var posts= this.props.posts.map((post) => { 
      return ( 
        <div key={post.id} className="single_post"> 

          <div className="post_title"><p>{post.title}</p></div> 
          <div className="post_content"><p>{post.content}</p></div> 
          <div className="post_type"><p>{post.prob_type}</p></div>
          <button type="button" className="btn btn-warning edit_button">Edit</button>
          <button type="button" onClick={this.handleDelete(post.id)} className="btn btn-danger delete_button">Delete</button>
        
        </div> 
        ) 
    }); 
    return( 
      <div> 
        {posts} 
      </div> 
      ) 
  } 
});

