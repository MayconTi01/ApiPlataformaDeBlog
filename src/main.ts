import { NestFactory } from '@nestjs/core';
import { BlogModule } from 'src/blog/blog.module';

async function bootstrap() {
  const app = await NestFactory.create(BlogModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
