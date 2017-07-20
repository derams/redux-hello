import React,  { Component } from "react"
import store from './store'
import {connect} from 'react-redux'

class PostBody extends Component{
handleAdd(){
  let newLikes = this.props.likes

  store.dispatch({type:'INCREMENT_LIKE',likes:newLikes})
}
  render(){
    return(
      <div className="post-body">
        <div className="title">
          {this.props.postId}
        </div>
        <div className="likes-num num" onClick={this.handleAdd.bind(this)}>
          {this.props.likes}赞
        </div>
        <div className="comment-num num">
          {this.props.comments.length}评论
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>({
  comments:state.comments,
  likes:state.likes
})
export default connect(mapStateToProps)(PostBody)
