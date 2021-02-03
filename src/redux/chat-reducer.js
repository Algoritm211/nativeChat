


// type message = {
//   message: string,
//   photo: string,
//   userId: number,
//   userName: string
// }


import {chatAPI} from "../api/chat-api";

const SET_CHAT_MESSAGES = 'nativeChat/chat-reducer/SET_CHAT_MESSAGES'


const initialState = {
  messages: []
}


export const chatReducer = (state = initialState, action) =>  {
  switch (action.type) {
    case SET_CHAT_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, ...action.messages]
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



export const startMessageListening = () => async (dispatch) => {
  chatAPI.start()
  chatAPI.subscribe(createMessageHandler(dispatch))
}

export const stopMessageListening = () => async (dispatch) => {
  chatAPI.unsubscribe(createMessageHandler(dispatch))
  chatAPI.stop()
}

export const sendMessage = (message) => async (dispatch) => {
  chatAPI.sendMessage(message)
}
