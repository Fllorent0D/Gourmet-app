/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {INestApplication, Logger} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {express} from 'graphql-voyager/middleware';
import { AppModule } from './app/app.module';
import {PrismaService} from "./app/shared/db/prisma.service";

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);
  const globalPrefix = 'api';

  app.use('/voyager', express({endpointUrl: '/graphql'}))

  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;

  const primaService = app.get(PrismaService);
  await primaService.enableShutdownHooks(app);

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
