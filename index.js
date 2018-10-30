import io from 'socket.io-client'

const host = 'localhost'
const port = 2323

const socket = io(`http://${host}:${port}`)

socket.on('connect', () => {
  console.log(`Connected established to socket ${socket.id}`)
})