import { ValidationPipe, ValidationPipeOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  const validationPipeOptions: ValidationPipeOptions = {
      whitelist: true
  }

  app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
  await app.listen(3000);
}
bootstrap();

