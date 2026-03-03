import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateArtigoDto} from './dto/create-blog.dto.js';
import { UpdateBlogDto } from './dto/update-blog.dto.js';
import {ConflictException, NotFoundException} from '@nestjs/common'



@Injectable()
export class BlogService { // definição das funções do blog 

//============ Criação de artigo ============

  constructor(private prisma: PrismaService) {} // conecxão com o prisma
   async create(CriaArtigo: CreateArtigoDto ) { // DTO de banco de dados
    /// 
    const artigoExiste = await this.prisma.artigo.findUnique( {   // verifica se existe dado igual usando função prisma 
      where: { titulo: CriaArtigo.titulo } }) ; 
      if (artigoExiste){   // validação e resposta da verificação. 
        throw new ConflictException('Já existe um artigo com esse título.') } ; 
  
    const novoArtigo = await this.prisma.artigo.create({  
    data: {
      titulo: CriaArtigo.titulo,
      DescricaoDoArtigo: CriaArtigo.DescricaoDoArtigo,
      Autor: CriaArtigo.Autor,
      Tags: CriaArtigo.Tags
    } }) 
    console.log(novoArtigo);
    
    return {
      dados: novoArtigo, 
      Sucesso : "Seu artigo foi criado com sucesso"
    }

// 
   
} 

// ==================== Listar todos os dados ==========================
async findAll() {
  const todosOsArtigos = await this.prisma.artigo.findMany();
  return {  message: "Lista de artigos completa",  
    TodosOsArtigos: todosOsArtigos  
   
  }} ;

  // ==================== Listar artigos por id  ==================================
  
async Listarid(id: number) {

  const artigoId = await this.prisma.artigo.findUnique( { 
    where: { id : id }
  })
  return artigoId;
  }

// ======== Listar po tags ou datas   ======================

async ListarPorTag(tags: string) {

//entrada: acessar do tipo tag, data , ou teg e data 
//process: criar função =>  


  const artigo = await this.prisma.artigo.findMany( { 
    where: { Tags: tags  }
  })
  return artigo ;
  }

// ====== editar artigo por id ================

// entrada: selecionar rota put com id => fazer alteração no corpo 
// process: verifica se artigo existe => atualiza dados do artigo para o novo body => retorna 
// saida: body que era antes => body esta agora => mensagem confirmando alteração. 

async update(id: number, updateBlogDto: UpdateBlogDto) { 
  

const verificaArtigo = await this.prisma.artigo.findUnique({ 
    where: {  id : id } 
})
  if(!verificaArtigo) 
   { 
    throw new NotFoundException('Artigo não encontrado'); // verificação FUNCIONANDO 
  }
const artigoAtualizado = this.prisma.artigo.update( {
    where : { id : id }, 
    data: updateBlogDto  } ) 
  
    
  return {
    message: 'Artigo atualizado com sucesso',
    data: artigoAtualizado
  };
} 
// 1 - configurar dto de update 
// 2- criar função, adicionando dto de atualização
// 3- criar a validação para ver se arquivo existe no banco 
// 4- criar varivel de atualização de artigos com metodo update do prisma
// 5- 



  // remove(id: number) {
  //   return `This action removes a #${id} blog`;
  // } 
} 
