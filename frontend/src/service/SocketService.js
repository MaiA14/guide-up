import io from 'socket.io-client';

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : 'http://localhost:3030'

let socket;

export default {
  setup,
  terminate,
  on,
  off,
  emit
};

function setup() {
  socket = io(BASE_URL);
}

function terminate() {
  socket = null;
}

function on(eventName, cb) {
  socket.on(eventName, cb);
}

function off(eventName, cb) {
  socket.off(eventName, cb);
}

function emit(eventName, data) {
  socket.emit(eventName, data);
}



// function socketBroadcastEmit(eventName, data) {
//   socket.broadcast.emit(eventName, data);
// }


