import { PartialType } from '@nestjs/mapped-types';
import { CreateArtigoDto  } from './create-blog.dto.js';

export class UpdateBlogDto extends PartialType(CreateArtigoDto ) {}
