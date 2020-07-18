import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // FYI: https://github.com/expressjs/cors#configuration-options
    cors: true,
  });
  app.use(helmet());

  await app.listen(3000);
}
bootstrap();
