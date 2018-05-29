import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppIniciocontroller} from './app.iniciocontroller';
import { AppPreguntasfrecuentescontroller} from './app.preguntasfrecuentes';
import { LogMiddleware} from './log.middleware';
import {CookieMiddleware} from "./cookie.middleware";
import {AppCookiecontroller} from "./html/app.cookiecontroller";

@Module({
  imports: [],
  controllers: [AppController, AppIniciocontroller, AppPreguntasfrecuentescontroller],
  providers: [AppService],
})
export class AppModule implements NestModule{

    configure(consumer: MiddlewareConsumer): void {
        consumer
            .apply(LogMiddleware)
            .with('archivo')
            .forRoutes(AppIniciocontroller);

        consumer
            .apply(LogMiddleware)
            .with('consola')
            .forRoutes('/PreguntasFrecuentes/mostrarPreguntas');

        consumer
            .apply(LogMiddleware)
            .with('todo')
            .forRoutes('/PreguntasFrecuentes/ingresarPregunta');

        consumer
            .apply(CookieMiddleware)
            .forRoutes(AppPreguntasfrecuentescontroller);
    }


}
