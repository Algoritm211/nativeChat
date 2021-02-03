


let subscribers = []
let ws // WebSocket


const closeHandler = () => {
  setTimeout(createChannel, 5000)
}

const handleMessage = (event) => {
  const newMessages = JSON.parse(event.data)
  subscribers.forEach(subscriber => {
    subscriber(newMessages)
  })
}


const createChannel = () => {
  ws?.removeEventListener('message', handleMessage)
  ws?.removeEventListener('close', closeHandler)
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
  ws.addEventListener('message', handleMessage)
  ws.addEventListener('close', closeHandler)
}


export const chatAPI = {
  start() {
    createChannel()
  },

  subscribe(callback) {
    subscribers.push(callback)
  },

  unsubscribe(callback) {
    subscribers = subscribers.filter(subscriber => subscriber !== callback)
  },

  sendMessage(message) {
    ws?.send(message)
  },

  stop() {
    subscribers = []
    ws?.removeEventListener('message', handleMessage)
    ws?.removeEventListener('close', closeHandler)
  }
}
