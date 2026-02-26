import { Module } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module.js';
import { BlogModule } from './blog/blog.module.js';

@Module({
  imports: [PrismaModule, BlogModule],
})
export class AppModule {} 