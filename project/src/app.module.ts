import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppIniciocontroller} from './app.iniciocontroller';
import { AppPreguntasfrecuentescontroller} from './app.preguntasfrecuentes';

@Module({
  imports: [],
  controllers: [AppController, AppIniciocontroller, AppPreguntasfrecuentescontroller],
  providers: [AppService],
})
export class AppModule {}
