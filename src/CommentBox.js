import React, { Component } from "react"
import store from './store'
import {connect} from 'react-redux'

class CommentBox extends Component{
  state={
    comments:store.getState()
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    let newComment = this.commentInput.value
  // 传出数据
    store.dispatch({type:'ADD_COMMENT',comment:newComment})
    this.setState({
      comments:store.getState()
    })
  // 清空inpteut的value值
    this.commentForm.reset()
    }
  render(){
    console.log(store.getState())
    let comments = store.getState()
    return(
      <div  className="comment-box">
        {
          this.state.comments.map(item => (
            <li key={Math.random()} className="comment">{item}</li>
          ))
        }
        <form className="comment-form" onSubmit={this.handleSubmit} ref={value => this.commentForm = value}>
        <input type="text" className="input" ref={value => this.commentInput = value} />
        <button type="submit" className="submit-btn">
        提交</button>
        </form>
        <div className="underline"></div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>({
  comment:state
})
export default connect(mapStateToProps)(CommentBox)