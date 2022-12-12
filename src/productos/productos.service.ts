import { Injectable, NotFoundException, ParseUUIDPipe} from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { Producto } from './entities/producto.entity';
import { ValidationMessages } from 'src/Helpers/validation.menssages.helper';
import { ProductM } from './entities/product.entity.mongo';
import { Model } from 'mongoose';

@Injectable()
export class ProductosService {

  constructor(
    @InjectModel(ProductM.name) //Se decora y se pasa el nombre del modelo
    private readonly productModel : Model<ProductM> //Manejo de genericos
  ) {}

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


  /* create(createProductoDto: CreateProductoDto) {
    const productoItem : Producto = {
      id: uuidv4(),
      nombre: createProductoDto.nombre,
      precio: createProductoDto.precio
    };

    this.arrProducts.push(productoItem);

    return (createProductoDto);
  } */

  async create(createProductoDto: CreateProductoDto) {
    const product = await this.productModel.create(createProductoDto);
    return product;
  }

  /* findAll() {
    return this.arrProducts;
  } */

  findAll() {
    return this.productModel.find().exec();
  }


  /* findOne(id: string) {
    const productoItem = this.arrProducts.find( item => item.id === id)

    if(!productoItem){
      throw new NotFoundException(ValidationMessages.ElEMENTO_NO_ENCONTRADO);
    }

    return productoItem;
  } */

  findOne(name: string) {
    const productoItem = this.productModel.find( item => item.name === name)

    if(!productoItem){
      throw new NotFoundException(ValidationMessages.ElEMENTO_NO_ENCONTRADO);
    }

    return productoItem;
  }

  /* update(id: string, updateProductoDto: UpdateProductoDto) {
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
  } */

  /* remove(id: string) {
    this.arrProducts = this.arrProducts.filter(x => x.id !== id);
  } */
}


