    import { IsString, IsNotEmpty } from 'class-validator';
    import { ApiProperty } from '@nestjs/swagger';

export class CreateArtigoDto {

  @ApiProperty({ example: 'Como usar Prisma com NestJS' })
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({ example: 'Este artigo ensina integração...' })
  @IsString()
  @IsNotEmpty()
  DescricaoDoArtigo: string;

  @ApiProperty({ example: 'Maycon Rodrigues' })
  @IsString()
  @IsNotEmpty()
  Autor: string;

  @ApiProperty({ example: 'backend, prisma, nestjs' })
  @IsString()
  @IsNotEmpty()
  Tags: string;
}


