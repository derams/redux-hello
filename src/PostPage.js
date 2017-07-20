import React, { Component } from 'react'

import PostBody from './PostBody'
import CommentBox from './CommentBox'

class PostPage extends Component{
  render(){
    let {id} = this.props.match.params
    return(
      <div>
        <div className="top  clearfix">
          <PostBody postId={id} />
        </div>
        <div className="bottom clearfix">
          <CommentBox postId={id} />
        </div>
      </div>
    )
  }
}
export default PostPage
