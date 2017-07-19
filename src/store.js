import {createStore} from 'redux';

import commentReducer from './reducers/comment'


let store = createStore(commentReducer)
export default store;
