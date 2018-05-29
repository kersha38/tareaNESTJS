import { Get, HttpCode, Controller, Response } from '@nestjs/common';
const fs = require('fs');
let datosArchivo='';
let artilugio=0;
@Controller('Inicio')
export class AppIniciocontroller{



  @Get('Home')
  @HttpCode(200)
  mostrarContenido(@Response() res){

    fs.readFile(
        __dirname + '/html/header.html',
        'utf8',
        (error,data)=>{
          if(error){
            return res.status(400);
          }
            datosArchivo+=data;
            fs.readFile(
                __dirname + '/html/contenido.html',
                'utf8',
                (error,data)=>{
                    if(error){
                        return res.status(400);
                    }
                    datosArchivo+=data;
                    fs.readFile(
                        __dirname + '/html/footer.html',
                        'utf8',
                        (error,data)=>{
                            if(error){
                                return res.status(400);
                            }
                            datosArchivo+=data;
                            res.send(datosArchivo);
                        }
                    )
                }
            )
        }
    );/*

    this.leerDatos(res,
        this.leerDatos(res,
            this.leerDatos(res,
                ()=> datosArchivo,
                'footer.html'),
            'contenido.html'),
        'header.html');*/

  }

  leerDatos(res,funcionSiguiente,ruta){
      fs.readFile(
          __dirname + '/html/'+ruta,
          'utf8',
          (error,data)=>{
              if(error){
                  return res.status(400);
              }
              datosArchivo+=data;
              funcionSiguiente();
          }
      )
    }

}