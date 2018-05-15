import { Get, Controller, Post, HttpCode, Param, Req, Res, Body } from '@nestjs/common';

const fs = require('fs');

@Controller('PreguntasFrecuentes')
export class AppPreguntasfrecuentescontroller{

  preguntaFrecuentes: PreguntaFrecuente[]=[];

  @Get('mostrarPreguntas')
  mostrarPreguntas(){
    let html=fs.readFileSync(
      __dirname + '/html/'+"PreguntasFrecuentes.html",
      'utf8',)

    this.preguntaFrecuentes.forEach((preguntaActual,indice,arreglo)=>{
      html.replace('{{pregunta}}',preguntaActual.pregunta+'{{pregunta}}');
      html.replace('{{respuesta}}',preguntaActual.respuesta+'{{respuesta}}');
    });

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

