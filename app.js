const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();

crearArchivo(argv.b)
		.then(nombreArchivo => console.log(nombreArchivo.green, 'Creado'.blue))
		.catch( err => console.log(err));

