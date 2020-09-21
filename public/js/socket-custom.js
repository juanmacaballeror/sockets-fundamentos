// io es la funcion que viene en la libreria socket
var socket = io();
//'connect es la palabra reservada y tiene que llamarse asi'
socket.on('connect', () => {
  console.log('conectado al servidor');
});

socket.on('disconnect', () => {
  console.log('perdimos conexion con el servidor');
})

//emit,eventos enviar información
socket.emit('enviarMensaje', {
  usuario: 'juanma Caballero',
  mensaje: 'Hola Mundo'
}, function (data) {
  console.log('respuesta server', data)
})

//escuchar informacion
socket.on('enviarMensaje', function (mensaje) {
  console.log(mensaje)
})
