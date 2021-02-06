


let subscribers = {
  'message-subscribers': [],
  'status-changers': []
}

let ws // WebSocket


const closeHandler = () => {
  notifyAboutStatusChange('pending')
  setTimeout(createChannel, 5000)
}

const handleMessage = (event) => {
  const newMessages = JSON.parse(event.data)
  subscribers['message-subscribers'].forEach(subscriber => {
    subscriber(newMessages)
  })
}

const wsOpenHandler = () => {
  notifyAboutStatusChange('ok')
}

const notifyAboutStatusChange = (status) => {
  subscribers['status-changers'].forEach(subscriber => {
    subscriber(status)
  })
}

const closeUp = () => {
  ws?.removeEventListener('message', handleMessage)
  ws?.removeEventListener('close', closeHandler)
  ws?.removeEventListener('open', wsOpenHandler)
}


const createChannel = () => {
  closeUp()
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
  notifyAboutStatusChange('pending')
  ws.addEventListener('message', handleMessage)
  ws.addEventListener('close', closeHandler)
  ws.addEventListener('open', wsOpenHandler)
}


export const chatAPI = {
  start() {
    createChannel()
  },

  subscribe(eventName, callback) {
    subscribers[eventName].push(callback)
  },

  unsubscribe(eventName, callback) {
    subscribers[eventName] = subscribers[eventName].filter(subscriber => subscriber !== callback)
  },

  sendMessage(message) {
    ws?.send(message)
  },

  stop() {
    subscribers = []
    closeUp()
  }
}
