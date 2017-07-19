import React, { Component } from 'react';
import store from './store'
import './App.css';
import PostBody from "./PostBody"
import CommentBox from "./CommentBox"
import {Provider} from 'react-redux'
class App extends Component {

  render() {
    return (

      <Provider store={store}>
        <div>
          <div className="top  clearfix">
            <PostBody />

          </div>
          <div className="bottom clearfix">
            <CommentBox  />
          </div>
        </div>
      </Provider>

    );
  }
}

export default App;
