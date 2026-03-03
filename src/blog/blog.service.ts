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



async update(id: number, updateBlogDto: UpdateBlogDto) { 
  

const verificaArtigo = await this.prisma.artigo.findUnique({ 
    where: {  id : id } 
})
  if(!verificaArtigo) 
   { 
    throw new NotFoundException('Artigo não encontrado'); // verificação FUNCIONANDO 
  }
const artigoAtualizado = await this.prisma.artigo.update( {
    where : { id : id }, 
    data: updateBlogDto  } ) 
  
    
  return {
    message: 'Artigo atualizado com sucesso',
    data: artigoAtualizado
  };
} 
/* 
entrada: pesrquisar url por id 
                                        ==> SIM existe: ==> excluir artigo usando metodo prisma          
process: verifica se id existe no banco | 
                                        ==> Não existe ==> messagem que não existe o artigo  
saida =>  retorna menssagem que artigo foi ezxcluido com sucesso
*/ 

/*  
1- criar função que consulta dado no banco pelo id  do artigo
                                                                          ==> Sim: avança para excluir      
2- fazer validadação, que aguarda retorno do banco para ver se id existe  | 
                                                                          ==> não: messagem que diz que artigo existe
3- criar varivel que recebe dado do id exclui do banco, usando metodo prisma 
4- retorna mensagem que confirma exclução do artigo   

*/ 


async remove(id: number) {


  const verificacao = await this.prisma.artigo.findUnique( { 
      where: {  
      id: id 
    }
  })
  if(!verificacao) { 
     throw new NotFoundException('Artigo não encontrado');
  }
  const artigoDeletar =  await this.prisma.artigo.delete( { 
    where: {  
      id: id 
    }
  })
  return  {
    message: "Artigo deletado com sucesso", 
    artigoDeletado: artigoDeletar }
 } 
} 
