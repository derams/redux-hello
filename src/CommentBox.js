
import React, { Component } from 'react'
import store from './store'
import { connect } from 'react-redux'

class CommentBox extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    let newComment = this.commentInput.value
    store.dispatch({type: 'ADD_COMMENT', comment: newComment, postId: this.props.postId})
    this.commentForm.reset()
  }

  render() {
    let { postId, comments } = this.props
    let myComments = comments.filter(value => value.postId ===  postId ).map(item => {
      return item.content;
    })

    return (
      <div className="comment-box">
        {
          myComments.map(item => (
            <li className="comment" key={Math.random()}>{item}</li>
          ))
        }
        <form ref={value => this.commentForm = value}
          onSubmit={this.handleSubmit} className="comment-form">
          <input type="text" className="input" ref={value => this.commentInput = value} />
          <button type="submit" className="submit-btn">提交</button>
        </form>
        <div className="underline"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments
})

export default connect(mapStateToProps)(CommentBox)
