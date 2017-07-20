import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PostBody from './PostBody'
class HomePage extends Component{
  render(){
    let { posts } = this.props
      console.log('posts', posts)
      let postList = posts.map(item => {
        return(
          <PostBody key={item.postId} postId={item.postId} />
        )
      })
    return(
        <div className="home">
          { postList }
        </div>
    )
  }
}
const mapStateToProps=(state)=>({
    porps: state.posts
})
export default connect(mapStateToProps)(HomePage)
