import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class HomePage extends Component{
  render(){
    return(
      <div>
        <ul>
          <li><Link to="/post/1">Git 技巧</Link></li>
          <li><Link to="/post/2">Git 学习</Link></li>
        </ul>
      </div>
    )
  }
}
export default HomePage
