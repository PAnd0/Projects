var NewPost = React.createClass({
  handleClick() {
    var title = this.refs.title.value;
    var content = this.refs.content.value;
    var prob_type = this.refs.prob_type.value;
    $.ajax({
      url: 'api/v1/posts',
      type: 'POST',
      data: {post: {title: title, content: content, prob_type: prob_type}},
      success: (post) => {
        this.props.handleSubmit(post);
      }
    });
  },

  render () {
    
    return (
      <div>
        <h1>new post</h1>
        <input ref="title" placeholder="enter post title" />
        <input ref="content" placeholder="enter a content" />

        
          <select ref="prob_type"className="form-control">
              <option>1st</option>
              <option>2nd</option>
              <option>3rd</option>
              <option>Personal</option>
              <option>Other</option>
            </select>
     

        <button onClick={this.handleClick}>submit</button>
      </div>
    )
  }
});