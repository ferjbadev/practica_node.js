const colors = require('colors');
const fs = require('fs');
const crearArchivo = async(base = 8) => {
    try{
      console.log('================='.red);
      console.log( ' Tabla del:', colors.blue(base));
      console.log('================='.green);
      let salida = '';

      for(let i = 1; i <=10; i++) {
            salida  += `${base} X ${i} = ${base * i}\n`;
      }				
      console.log(salida);

      fs.writeFileSync(`./salida/Tabla_${base}.txt`, salida.blue,);
      return`Tabla_${base}.txt`;
    } catch (err) {
      throw err;
    }
    }

module.exports = {
  crearArchivo
}