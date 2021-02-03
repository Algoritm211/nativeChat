import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatReducer} from "./chat-reducer";
import thunkMiddleware from 'redux-thunk'


const rootReducer = combineReducers({
  chat: chatReducer
})


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

window.__store__ = store

export default store
