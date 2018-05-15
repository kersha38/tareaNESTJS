import { Get, HttpCode, Controller } from '@nestjs/common';
const fs = require('fs');

@Controller('Inicio')
export class AppIniciocontroller{

  @Get('Home')
  @HttpCode(200)
  mostrarContenido(){
    let datosArchivo='';
    let html = fs.readFile(
      __dirname + '/html/Index.html',
      'utf8'
    );

    datosArchivo+=this.leerArchivos('header.html');
    datosArchivo+=this.leerArchivos('contenido.html');
    datosArchivo+=this.leerArchivos('footer.html');

    //html.replace("{{variable}}",datosArchivo)

    return html;

  }

  leerArchivos(nombreRuta:string){
    return fs.readFile(
      __dirname + '/html/'+nombreRuta,
      'utf8',
      (error,detalle)=>{
        if(error){
          HttpCode(505)
        }else{
          HttpCode(200)
        }

      }
    )
  }

}