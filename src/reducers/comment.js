


let comments=[
    '1',
    '2'
  ]

export default function commentReducer(state = comments, action){
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state,action.comment]
    default:
    return state;
  }
}
