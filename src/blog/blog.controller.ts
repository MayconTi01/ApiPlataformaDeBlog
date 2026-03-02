import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BlogService } from './blog.service.js';
import { CreateArtigoDto} from './dto/create-blog.dto.js';
import { UpdateBlogDto } from './dto/update-blog.dto.js';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}


//1 - criar artigos  - ok 

//2- pesquisar todos os artigos - Ok 

//3- pesquisar artigo por id - ok 

//4- pesquisar artidos com filtro data ou tegs  

//5- editar um artigo por id 

//6- excluir um artigo


// ============== Rota Criaçao Artigo =================

  @Post()
  create(@Body() CriaArtigo: CreateArtigoDto ) {
    return this.blogService.create(CriaArtigo)
    return console.log( " Ok")
    
  }

  // =========== Rota de listagem de todos os artigos =============================

  @Get()
  async findAll() {
    //return console.log("dwwadawdaw")
    return this.blogService.findAll();
  } 

  // ================== Rota de listagem de artigo por id ==================================
@Get(':id')
  Listarid(@Param('id') id: string) {
  return this.blogService.Listarid(+id);
}

// =================== Rota de listagem de artigos por tags =================

@Get('tag/:Tags')
  ListarPorTag(@Param('Tags') Tags:string) {
  return this.blogService.ListarPorTag(Tags);
}
@Query()
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
  //   return this.blogService.update(+id, updateBlogDto);
  // }

  // @Delete(':id')

  // remove(@Param('id') id: string) {
  //   return this.blogService.remove(+id);
}

