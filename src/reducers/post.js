// import likeReducer from './like'
// import commentReducer from './comment'
// import { combineReducers } from 'redux'
//
// const rootReducer = combineReducers({
//   comments : commentReducer,
//   posts : postReducer
// })
//
// export default rootReducer


let posts = [
  {
    postId: '1',
    likes: 1,
    title: 'Git 技巧'
  },
  {
    postId: '2',
    likes: 2,
    title: '学习 Redux'
  }
]


export default function postReducer(state = posts, action) {
  switch (action.type) {
    case 'INCREMENT_LIKE':
            let stateCopy = state.slice()
            stateCopy.map(item => {
              if(item.postId === action.postId){
                item.likes++
                return item
              }
              return item
            })
            return stateCopy
          default:
            return state
        }
}
