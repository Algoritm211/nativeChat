


// type message = {
//   message: string,
//   photo: string,
//   userId: number,
//   userName: string
// }


import {chatAPI} from "../api/chat-api";

const SET_CHAT_MESSAGES = 'nativeChat/chat-reducer/SET_CHAT_MESSAGES'
const CHANGE_STATUS = 'nativeChat/chat-reducer/CHANGE_STATUS'


const initialState = {
  messages: [],
  status: 'pending'
}


export const chatReducer = (state = initialState, action) =>  {
  switch (action.type) {
    case SET_CHAT_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, ...action.messages]
      }
    case CHANGE_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    default:
      return state
  }
}


const actions = {
  setMessages(messages) {
    return {
      type: SET_CHAT_MESSAGES,
      messages: messages
    }
  },
  setStatus(status) {
    return {
      type: CHANGE_STATUS,
      status: status
    }
  }
}


let _messageHandler = null


const createMessageHandler = (dispatch) => {
  if (_messageHandler === null) {
    _messageHandler = (message) => {
      dispatch(actions.setMessages(message))
    }
  }

  return _messageHandler
}

let _statusHandler = null

const createStatusHandler = (dispatch) => {
  if (_statusHandler === null) {
    _statusHandler = (status) => {
      dispatch(actions.setStatus(status))
    }
  }
  return _statusHandler
}



export const startMessageListening = () => async (dispatch) => {
  chatAPI.start()
  chatAPI.subscribe('message-subscribers', createMessageHandler(dispatch))
  chatAPI.subscribe('status-changers', createStatusHandler(dispatch))
}

export const stopMessageListening = () => async (dispatch) => {
  chatAPI.unsubscribe('message-subscribers', createMessageHandler(dispatch))
  chatAPI.unsubscribe('status-changers', createStatusHandler(dispatch))
  chatAPI.stop()
}

export const sendMessage = (message) => async (dispatch) => {
  chatAPI.sendMessage(message)
}
