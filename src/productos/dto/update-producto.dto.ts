import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';
import { IsString, IsNumber } from "class-validator";
import { ValidationMessages } from "src/Helpers/validation.menssages.helper";

export class UpdateProductoDto {
    @IsString({message: ValidationMessages.ES_CADENA + '$property'})
    nombre: string;
    @IsNumber()
    precio: number;
}
