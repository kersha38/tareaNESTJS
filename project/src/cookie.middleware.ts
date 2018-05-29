import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';
const fs = require('fs');

@Injectable()
export class CookieMiddleware implements NestMiddleware {

    resolve(): MiddlewareFunction{
        return (request, response, next) => {

            const nombreCookie = request.originalUrl;

            const existeCookie = request.cookies[nombreCookie];

            if(existeCookie){

                response.send('SI esta en cache');
            }else{
                const registroCookie={
                    nombre:nombreCookie,
                    valor: true

                };
                response.cookie(registroCookie.nombre,registroCookie.valor);
                response.send('NO esta en cache');
            }

            next();
        };
    }
}