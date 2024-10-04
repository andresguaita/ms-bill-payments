
import {Logger, ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import rTracer = require('cls-rtracer');
import {ConfigService} from '@nestjs/config';


async function bootstrap() {

  const app = await NestFactory.create(AppModule, {cors: true});

  //Configuración librería para validación de DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidUnknownValues: true,
      skipNullProperties: true,
    })
  );

  //Configuración libreria para generación de indentificador de solicitud
  app.use(rTracer.expressMiddleware());

  //Se carga la configuración
  const config = app.get(ConfigService);

  //Configuración de filter para el manejo de excepciones


  // Inicialización de la aplicación
  const port = config.get<number>('PORT') || 3000;
  await app.listen(port, () =>
    Logger.log(`Application is running on: port: ${port}`)
  );
}
void bootstrap();
