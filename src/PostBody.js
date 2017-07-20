import React,  { Component } from "react"
import store from './store'
import {connect} from 'react-redux'

class PostBody extends Component{
handleAdd = () => {
  let newLikes = this.props.likes

  store.dispatch({type:'INCREMENT_LIKE', postId: this.props.postId })
}
  render(){
    let {posts, postId} = this.props
    let currentPost = posts.filter(value => value.postId === postId )[0]
    return(
      <div className="post-body">
        <div className="title">
          {currentPost.title}
        </div>
        <div className="likes-num num" onClick={this.handleAdd}>
          {currentPost.likes}赞
        </div>
        <div className="comment-num num">
          {this.props.comments.length}评论
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  comments:state.comments,
  posts:state.posts
})
export default connect(mapStateToProps)(PostBody)
