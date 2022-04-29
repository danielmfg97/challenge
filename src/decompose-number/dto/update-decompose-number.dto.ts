import { PartialType } from '@nestjs/mapped-types';
import { CreateDecomposeNumberDto } from './create-decompose-number.dto';

export class UpdateDecomposeNumberDto extends PartialType(CreateDecomposeNumberDto) {}
