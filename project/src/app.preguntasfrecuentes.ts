import { Get, Controller, Post, HttpCode, Param, Req, Res, Body } from '@nestjs/common';

const fs = require('fs');

@Controller('PreguntasFrecuentes')
export class AppPreguntasfrecuentescontroller{

  preguntaFrecuentes: PreguntaFrecuente[]=[];

  @Get('mostrarPreguntas')
  mostrarPreguntas(){
    let html=fs.readFileSync(
      __dirname + '/html/'+"PreguntasFrecuentes.html",
      'utf8')

    this.preguntaFrecuentes.forEach((preguntaActual,indice,arreglo)=>{

      html = html.replace('{{pregunta}}','<h2>'+preguntaActual.pregunta+'</h2>{{pregunta}}');
      html = html.replace('{{respuesta}}','<h1>'+preguntaActual.respuesta+'</h1>{{respuesta}}');
    });

    html=html.replace('{{pregunta}}','');
    html=html.replace('{{respuesta}}','');
    return html;
  };

  @Post('ingresarPregunta')
  ingresarPregunta(
    @Body() bodyParams
){

    this.preguntaFrecuentes.push(new PreguntaFrecuente(bodyParams.pregunta,bodyParams.respuesta))

    return this.preguntaFrecuentes;
  }
}

export class PreguntaFrecuente {
  constructor(public  pregunta:string,
              public respuesta?:string){
  }

}

