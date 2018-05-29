import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';
const fs = require('fs');

@Injectable()
export class LogMiddleware implements NestMiddleware {

    resolve(nivelDeLog: string): MiddlewareFunction{
        return (request, response, next) => {

            const respuesta = {
                baseUrl: request.baseUrl,
                hostname: request.hostname,
                subdomains: request.subdomains,
                ip: request.ip,
                method: request.method,
                originalUrl: request.originalUrl,
                path: request.path,
                protocol: request.protocol,
                headers: request.headers,
            };

            switch (nivelDeLog){
                case 'archivo':{
                    fs.writeFileSync(__dirname+'/logs.txt',JSON.stringify(respuesta));
                    break;
                }
                case 'consola':{
                    console.log(respuesta);
                    break;
                }
                default:{
                    fs.writeFileSync(__dirname+'/logs.txt',JSON.stringify(respuesta));
                    console.log(respuesta);
                    break;
                }
            }

            next();
        };
    }
}