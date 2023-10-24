import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

process.env.NODE_CONFIG_DIR = __dirname + '/config/';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
