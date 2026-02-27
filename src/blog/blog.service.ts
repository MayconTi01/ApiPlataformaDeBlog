import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateArtigoDto} from './dto/create-blog.dto.js';
import { UpdateBlogDto } from './dto/update-blog.dto.js';



@Injectable()
export class BlogService { // definição das funções do blog 

//============ Criação de artigo ============

  constructor(private prisma: PrismaService) {} // conecxão com o prisma
   async create(CriaArtigo: CreateArtigoDto ) { // DTO de banco de dados
    /// entrada: Editar corpo da requisição 
    /// process: prisma comando de criação => salva no banco 
    /// saida: messagem de sucesso
    const artigoExiste = await this.prisma.artigo.findUnique( { 
      where: { titulo: CriaArtigo.titulo } }) 
    console.log(artigoExiste)

    const novoArtigo = await this.prisma.artigo.create({
    data: {
      titulo: CriaArtigo.titulo,
      DescricaoDoArtigo: CriaArtigo.DescricaoDoArtigo,
      Autor: CriaArtigo.Autor,
      Tags: CriaArtigo.Tags
    } })

    return novoArtigo; 
    // //  1- criar DTO de criação
    // // 2- Adicionar conecxão com o prisma 
    // // 3- Adicionar o DTO de criação de artigo

    // 4 - verificar se existe algum artigo com o mesmo titulo 
    
    // 4- Usar metodo creat do prisma 
} 
  

  // async findAll() {
  //   return await this.prisma.user.findMany();
  //   return `This action returns all blog`; 
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} blog`;
  // }

  // update(id: number, updateBlogDto: UpdateBlogDto) { 
  //   return `This action updates a #${id} blog`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} blog`;
  // }
} 