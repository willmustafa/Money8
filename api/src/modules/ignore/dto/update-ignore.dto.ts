import { PartialType } from '@nestjs/mapped-types';
import { CreateIgnoreDto } from './create-ignore.dto';

export class UpdateIgnoreDto extends PartialType(CreateIgnoreDto) {}
