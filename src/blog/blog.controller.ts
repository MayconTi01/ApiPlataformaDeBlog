import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogService } from './blog.service.js';
import { CreateArtigoDto} from './dto/create-blog.dto.js';
import { UpdateBlogDto } from './dto/update-blog.dto.js';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}


//1 - criar artigos 

//2- pesquisar todos os artigos 

//3- pesquisar artigo por id 

//4- pesquisar artidos com filtro data ou tegs 

//5- editar um artigo por id 

//6- excluir um artigo


// ============== Rota Criaçao Artigo =================

  @Post()
  create(@Body() CriaArtigo: CreateArtigoDto ) {
    return this.blogService.create(CriaArtigo)
    return console.log( " Ok")
    
  }

  // @Get()
  // async findAll() {
  //   console.log("dwwadawdaw")
  //   return await this.blogService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.blogService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
  //   return this.blogService.update(+id, updateBlogDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.blogService.remove(+id);
  // }
}
