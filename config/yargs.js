const argv = require('yargs')
			.option('b', {
					alias: 'base',
					type: 'number',
					demandOption: true,
					describe: 'Es la base de la tabla de multiplicar'
			})
			.check((argv) => {
					if (isNaN(argv.b)){
            throw 'La base debe ser un numero!!!'
          }
					return true
			})
			.argv;

module.exports = argv;