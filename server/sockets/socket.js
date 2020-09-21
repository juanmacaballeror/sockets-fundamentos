//connection--> sabemos cuando un cliente se ha conectado al server
const { io } = require('../server')

io.on('connection', (client) => {
  console.log('usuario conectado');
  //envia informacion al cliente
  client.emit('enviarMensaje', {
    usuario: 'administrador',
    message: 'Bienvenido a esta aplicacion'
  })
  //escucha si se desconecta el cliente
  client.on('disconnect', () => {
    console.log('usuario desconectado');
  })
  //escuchar el cliente
  client.on('enviarMensaje', (data, callback) => {
    console.log(data)
    // if (mensaje.usuario) callback({ resp: 'TODO SALIO BIEN' })
    // else callback({ resp: 'ALGO SALIO MAL' })

    //con la funcionalidad broadcast, lanza un mensaje a todos los clientes que estan escuchando este evento
    client.broadcast.emit('enviarMensaje', data);

  })


})