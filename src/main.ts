import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

//precisa adicionar CORS para conectar com front End

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  
  await app.listen(3002);
}
bootstrap();
