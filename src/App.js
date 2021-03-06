import React, { Component } from 'react';
import store from './store'
import './App.css';
import PostBody from "./PostBody"
import CommentBox from "./CommentBox"
import {Provider} from 'react-redux'
import HomePage from './HomePage'
import PostPage from './PostPage'
import {BrowserRouter as Router, Route, Switch, Link
} from 'react-router-dom'

const Header = () => (
  <Link to="/" className="back-home">首页</Link>
)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/Post/:id" component={PostPage} />
          </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
