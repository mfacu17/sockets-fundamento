var socket = io()

socket.on('connect', function() {
    console.log('Conectado al servidor.');
})

// Los on son para escuchar información
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor.');
})

// Los emit son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Facundo',
    mensaje: 'Hola mundo'
}, function(respuesta) {
    console.log('Respuesta del server: ', respuesta);
})

// Escuchamos información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})