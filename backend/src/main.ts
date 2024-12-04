import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerConfigModule } from './swagger-config.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const PORT = process.env.PORT || 3000;
  SwaggerConfigModule.setup(app);

  await app.listen(PORT);

  console.log(`Application is running on: http://localhost:${PORT}`);
}
bootstrap();
