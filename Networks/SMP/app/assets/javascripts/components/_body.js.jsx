var Body = React.createClass({ 

    getInitialState() { 
      return { posts: [] } 

    },

    componentDidMount() { 
        $.getJSON('/api/v1/posts.json', (response) => { 
          this.setState({ posts: response }) 
        }); 
    }, 

    handleSubmit(post) { 
        var newState = this.state.posts.concat(post); this.setState({ posts: newState }) 
      },

    handleDelete(id) {
        $.ajax({
          url: `/api/v1/posts/${id}`,
          type: 'DELETE',
          success:() => {
            this.removePostClient(id);
          }
        });
      }, 

    removeItemClient(id) {
        var newPosts = this.state.posts.filter((post) => {
        return post.id != id;
       });

      this.setState({ post: newPosts });
      },

    render() { 
        return (
          <div className="mid_page">

            <div className="jumbotron">
                <p>Problem Network --Level 1.1</p>
             </div>  
              <NewPost handleSubmit={this.handleSubmit}/>
              <div className="the_posts">
                <AllPosts posts={this.state.posts} handleDelete = {this.handleDelete} /> 
              </div>

            </div> 
            ) 
      } 
    });
