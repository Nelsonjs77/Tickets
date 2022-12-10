import { Injectable, NotFoundException, ParseUUIDPipe} from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { v4 as uuidv4 } from 'uuid';
import { Producto } from './entities/producto.entity';
import { ValidationMessages } from 'src/Helpers/validation.menssages.helper';

@Injectable()
export class ProductosService {

  arrProducts : Producto[] = [
    {
      id: uuidv4(),
      nombre: "oreo",
      precio: 15
    },
    {
      id: uuidv4(),
      nombre: "chokis",
      precio: 14
    },

  ]


  create(createProductoDto: CreateProductoDto) {
    const productoItem : Producto = {
      id: uuidv4(),
      nombre: createProductoDto.nombre,
      precio: createProductoDto.precio
    };

    this.arrProducts.push(productoItem);

    return (createProductoDto);
  }

  findAll() {
    return this.arrProducts;
  }

  findOne(id: string) {
    const productoItem = this.arrProducts.find( item => item.id === id)

    if(!productoItem){
      throw new NotFoundException(ValidationMessages.ElEMENTO_NO_ENCONTRADO);
    }

    return productoItem;
  }

  update(id: string, updateProductoDto: UpdateProductoDto) {
    let productoDB = this.findOne(id);

    if(!productoDB)
      throw new NotFoundException(ValidationMessages.ElEMENTO_NO_ENCONTRADO);

      this.arrProducts = this.arrProducts.map(item => {
        if (item.id === id){
          productoDB = {
            id: id,
            ...productoDB, ...updateProductoDto
          };
          return productoDB;
        }else {
          return item;
        }
      })
    
    return productoDB;
  }

  remove(id: string) {
    this.arrProducts = this.arrProducts.filter(x => x.id !== id);
  }
}
