import { Get, HttpCode, Controller } from '@nestjs/common';
const fs = require('fs');

@Controller('Inicio')
export class AppIniciocontroller{

  @Get('Home')
  mostrarContenido(){
    let datosArchivo;


    datosArchivo+=this.leerArchivos('header.html');
    datosArchivo+=this.leerArchivos('contenido.html');
    datosArchivo+=this.leerArchivos('footer.html');


    return datosArchivo;

  }

  leerArchivos(nombreRuta:string){
    return fs.readFileSync(
      __dirname + '/html/'+nombreRuta,
      'utf8'
    )
  }

}