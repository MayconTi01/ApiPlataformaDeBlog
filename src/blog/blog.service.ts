import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateBlogDto } from './dto/create-blog.dto.js';
import { UpdateBlogDto } from './dto/update-blog.dto.js';



@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {} 
  create(createBlogDto: CreateBlogDto) {
    return 'This action adds a new blog';
  }

  async findAll() {
    return await this.prisma.user.findMany();
    return `This action returns all blog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blog`;
  }

  update(id: number, updateBlogDto: UpdateBlogDto) { 
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}