import React,  { Component } from "react"
import store from './store'
import {connect} from 'react-redux'

class PostBody extends Component{

  render(){
    return(
      <div className="post-body">
        this.props.comments.length
        <div>
          {this.props.comments.length}
        </div>

      </div>
    )
  }
}
const mapStateToProps = (state) =>({
  comment:state
})
export default connect(mapStateToProps)(PostBody)
