const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const PORT = 3001

http.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

const messages = []
const emitMessages = () => io.emit('chatMessage', messages)

io.on('connection', socket => {
  console.log('A user connected.')
  emitMessages(messages)
  socket.on('chatMessage', message => {
    // console.log(message)
    messages.push(message)
    emitMessages(messages)
  })
})
