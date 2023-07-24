import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//https://www.postman.com/cloudinaryteam/workspace/programmable-media/request/16080251-de7b7568-0f12-49d4-9f71-2225439c79a6
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableCors();

  await app.listen(3001);
}

bootstrap();
